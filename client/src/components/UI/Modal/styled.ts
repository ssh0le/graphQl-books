import styled from 'styled-components';

import { flexCenter } from '@/styles/common';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  overflow-y: auto;
  background-color: #0005;
`;

export const ModalMainContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
`;

export const ModalContentWrapper = styled.div`
  ${flexCenter};

  height: fit-content;
  min-height: 100%;
`;
