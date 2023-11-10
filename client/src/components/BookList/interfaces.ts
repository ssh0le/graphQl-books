import { Book } from '@/interfaces';

export interface BookListProps {
  books: Book[];
  onAfterDelete: () => void;
}
