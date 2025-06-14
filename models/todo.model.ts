export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export interface AddTodoPayload {
  title: string;
}

export interface UpdateTodoPayload {
  id: string;
  title: string;
}

export interface DeleteTodoPayload {
  id: string;
}