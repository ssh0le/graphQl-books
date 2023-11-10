import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

export const FormWrapper = styled.form`
  ${flexColumn};

  gap: 15px;
  width: fit-content;
`;

export const RadioButtonsWrapper = styled.div`
  ${flexColumn};

  gap: 20px;
  padding-left: 10px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
`;
