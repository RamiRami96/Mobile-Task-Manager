import { Todo } from '@/models/todo.model';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useStorage } from './useStorage';

const useTodoForm = () => {
  const { control, register, handleSubmit, reset, formState: { errors } } = useForm<Todo>();
  const {saveTodo} = useStorage()

  const onSubmit = (data: Todo) => {
    saveTodo(data)
    reset();
  };

  useEffect(() => {
    register('title', { required: 'Title is required' });
  }, [register]);

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};

export default useTodoForm;