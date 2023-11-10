import { ValidationError } from 'yup';

export const isCorrectYupError = (error: Error): error is ValidationError =>
  error instanceof ValidationError && Boolean(error.inner);
