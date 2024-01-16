import { Todo } from "./todo.model";

export enum status {
    PENDING = 'pending',
    LOADING = 'loading',
    ERROR = 'error',
    SUCCESS = 'success'
}

export interface TodoState {
    todos: Todo[];
    error: string | null;
    status: status;
}