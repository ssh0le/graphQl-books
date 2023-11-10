import { useMutation } from '@apollo/client';
import { useCallback, useState } from 'react';

import EditBookModal from '../EditBookModal';
import { deleteBook as deleteBookMutation } from '@/constants';

import BookCard from './BookCard';
import { BookListProps } from './interfaces';
import { BookListWrapper } from './styled';

const BookList = ({ books, onAfterDelete }: BookListProps) => {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [deleteBook] = useMutation(deleteBookMutation);

  const handleBookDelete = useCallback((id: string) => {
    deleteBook({
      variables: {
        id,
      },
    });
    onAfterDelete();
  }, []);

  const handleEditClick = useCallback((id: string) => {
    setSelectedBookId(id);
  }, []);

  const handleModalClose = () => {
    setSelectedBookId(null);
  };

  return (
    <>
      <BookListWrapper>
        {books.map((book) => {
          return (
            <BookCard
              onEditClick={handleEditClick}
              onDelete={handleBookDelete}
              key={book.id}
              {...book}
            />
          );
        })}
      </BookListWrapper>
      {selectedBookId !== null && (
        <EditBookModal bookId={selectedBookId} onClose={handleModalClose} />
      )}
    </>
  );
};

export default BookList;
