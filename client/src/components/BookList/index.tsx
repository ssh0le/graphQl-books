import BookCard from '../BookCard';

import { BookListProps } from './interfaces';
import { BookListWrapper } from './styled';

const BookList = ({ books }: BookListProps) => {
  return (
    <BookListWrapper>
      {books.map((book) => {
        return <BookCard key={book.id} {...book} />;
      })}
    </BookListWrapper>
  );
};

export default BookList;
