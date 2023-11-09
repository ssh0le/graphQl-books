export interface ValidationErrors {
  [key: string]: string;
}

export interface FormAction<T> {
  name: keyof T | string | 'reset';
  value?: string;
}
