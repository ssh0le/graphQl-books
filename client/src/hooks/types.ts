export interface ValidationErrors {
  [key: string]: string;
}

export interface ChangeAction<T> {
  name: keyof T | string;
  value?: string;
}

export interface ResetAction {
  name: 'reset';
  value: undefined;
}

export interface ResetFieldAction<T> {
  name: 'resetField';
  value: keyof T;
}

export interface UpdateStateAction<T> {
  name: 'updateState';
  value: T;
}

export type FormAction<T> =
  | ChangeAction<T>
  | ResetAction
  | ResetFieldAction<T>
  | UpdateStateAction<T>;
