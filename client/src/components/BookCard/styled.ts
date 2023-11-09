import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

export const BookCardWrapper = styled.div`
  ${flexColumn};

  gap: 20px;
  width: 300px;
  padding: 20px 10px;
  border: 1px solid black;
  border-radius: 15px;
`;

export const BookTitle = styled.h2`
  text-align: center;
`;

export const BookAuthor = styled.h3`
  text-align: center;
`;
