import { InputHTMLAttributes } from 'react';

export interface InoutFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
