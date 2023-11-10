import { InputHTMLAttributes } from 'react';

import { Author } from '@/interfaces';

export interface SelectAuthorProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  authors?: Author[];
  label?: string;
}
