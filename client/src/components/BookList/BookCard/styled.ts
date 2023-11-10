import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

export const BookCardWrapper = styled.div`
  ${flexColumn};

  gap: 20px;
  width: 300px;
  padding: 20px 10px;
  border: 1px solid black;
  border-radius: 15px;
  position: relative;
`;

export const BookTitle = styled.h2`
  text-align: center;
`;

export const BookAuthor = styled.h3`
  text-align: center;
`;

export const ControlsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const ControlItem = styled.div`
  cursor: pointer;
  padding: 5px;
`;

export const IconContainer = styled.div`
  width: 14px;

  img {
    width: 100%;
    height: 100%;
  }
`;
