import { Book } from '@/interfaces';

export interface BookCardProps extends Book {
  onDelete: (id: string) => void;
}
