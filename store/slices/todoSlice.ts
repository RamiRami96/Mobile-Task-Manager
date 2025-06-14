import { Todo, TodoState } from '@/models/todo.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
        setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id'>>) => {
      const newTodo: Todo = { id: Date.now().toString(), ...action.payload, completed: false };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { setTodos, addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;