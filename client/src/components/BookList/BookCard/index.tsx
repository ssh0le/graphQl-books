import { memo } from 'react';

import { images } from '@/constants/images';

import { BookCardProps } from './interfaces';
import {
  BookAuthor,
  BookCardWrapper,
  BookTitle,
  ControlItem,
  ControlsContainer,
  IconContainer,
} from './styled';

const BookCard = (props: BookCardProps) => {
  const {
    id,
    title,
    pageAmount,
    author: { name },
    onDelete,
    onEditClick,
  } = props;

  const handleEditClick = () => {
    onEditClick(id);
  };

  const handleBadgeClick = () => {
    onDelete(id);
  };

  return (
    <BookCardWrapper>
      <BookTitle>{title}</BookTitle>
      <BookAuthor>{name}</BookAuthor>
      <p>Page amount: {pageAmount}</p>
      <ControlsContainer>
        <ControlItem title="Edit" onClick={handleEditClick}>
          <IconContainer>
            <img src={images.edit} alt="Edit" />
          </IconContainer>
        </ControlItem>
        <ControlItem title="Delete" onClick={handleBadgeClick}>
          X
        </ControlItem>
      </ControlsContainer>
    </BookCardWrapper>
  );
};

export default memo(BookCard);
