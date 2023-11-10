import { InputHTMLAttributes } from 'react';

export interface RadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
