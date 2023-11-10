import { Author, Book } from './entities';

export interface BooksResponse {
  books: Book[];
}

export interface AuthorsResponse {
  authors: Author[];
}
