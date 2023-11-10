import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

export const FormWrapper = styled.form`
  ${flexColumn};

  gap: 20px;
  padding: 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
`;
