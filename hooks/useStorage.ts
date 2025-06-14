import { Todo } from '@/models/todo.model';
import { RootState } from '@/store';
import { setTodos } from '@/store/slices/todoSlice';
import {useEffect } from 'react';
import { MMKV } from 'react-native-mmkv';
import { useDispatch, useSelector } from 'react-redux';

const storage = new MMKV();

export const useStorage = () => {
    const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

    useEffect(() => {
        const storedTodos = storage.getString('todo');
        if (storedTodos) {
            dispatch(setTodos(JSON.parse(storedTodos) as Todo[]));
        }
    }, [dispatch]);

    const _persistTodos = (updatedTodos: Todo[]) => {
        dispatch(setTodos(updatedTodos));
        storage.set('todo', JSON.stringify(updatedTodos));
        console.log(storage.getString('todo'));
    };

    const saveTodo = (newValue: Omit<Todo, 'id'>): void => {
        const updatedTodos = [
            ...todos,
            { ...newValue, id: Date.now().toString(), completed: false }
        ];
        console.log('Saving todo:', updatedTodos);
        _persistTodos(updatedTodos);
    };

    const removeTodo = (id: string): void => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        _persistTodos(updatedTodos);
    };

    const getTodos = (): Todo[] => todos;

    const toggleTodo = (id: string): void => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        _persistTodos(updatedTodos);
    };

    return { saveTodo, removeTodo, getTodos, toggleTodo };
};