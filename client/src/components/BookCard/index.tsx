import { BookCardProps } from './interfaces';
import { BookAuthor, BookCardWrapper, BookTitle } from './styled';

const BookCard = (props: BookCardProps) => {
  const {
    title,
    pageAmount,
    author: { name },
  } = props;
  return (
    <BookCardWrapper>
      <BookTitle>{title}</BookTitle>
      <BookAuthor>{name}</BookAuthor>
      <p>Page amount: {pageAmount}</p>
    </BookCardWrapper>
  );
};

export default BookCard;
