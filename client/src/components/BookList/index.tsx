import { useMutation } from '@apollo/client';
import { useCallback } from 'react';

import { deleteBook as deleteBookMutation } from '@/constants';

import BookCard from './BookCard';
import { BookListProps } from './interfaces';
import { BookListWrapper } from './styled';

const BookList = ({ books, onAfterDelete }: BookListProps) => {
  const [deleteBook] = useMutation(deleteBookMutation);

  const handleBookDelete = useCallback((id: string) => {
    deleteBook({
      variables: {
        id,
      },
    });
    onAfterDelete();
  }, []);

  return (
    <BookListWrapper>
      {books.map((book) => {
        return <BookCard onDelete={handleBookDelete} key={book.id} {...book} />;
      })}
    </BookListWrapper>
  );
};

export default BookList;
