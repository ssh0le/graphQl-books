import { number, object, string } from 'yup';

import { NewBookWithExsitingAuthor } from '@/interfaces';

const requiredMessage = 'This field is required';
const wrongPageAmountLength = 'Wrong amount page number';
const wrongAuthorIdLength = 'Wrong author id length';
const wrongTitleLenght = 'Wrong title length';

export const newBookWithExistingAuthorSchema =
  object<NewBookWithExsitingAuthor>().shape({
    title: string().required(requiredMessage).min(2, wrongTitleLenght),
    pageAmount: number()
      .required(requiredMessage)
      .min(1, wrongPageAmountLength)
      .max(1000, wrongPageAmountLength),
    author: string().required(requiredMessage).min(1, wrongAuthorIdLength),
  });
