import { useMutation } from '@apollo/client';
import { ChangeEvent, FormEvent, useState } from 'react';

import {
  addNewBookWithExistingAuthor,
  addNewBookWithNewAuthor,
  newBookWithExistingAuthorSchema,
} from '@/constants';
import { addNewBookWithExistingAuthorForm } from '@/constants/staticText';
import { extractFields } from '@/helpers';
import { useForm } from '@/hooks/useForm';
import { NewBookWithExsitingAuthor } from '@/interfaces';

import { FormWrapper } from './styled';
import { AddBookFormProps, AuthorType } from './types';

const initialState = {
  title: '',
  pageAmount: 0,
  author: '',
};

const AddBookForm = ({ onAdd }: AddBookFormProps) => {
  const [authorType, setAuthorType] = useState<AuthorType>('existing');
  const { dispatch, formParams, handleSubmit } =
    useForm<NewBookWithExsitingAuthor>(
      initialState,
      newBookWithExistingAuthorSchema,
    );

  const [addBookWithExistingAuthor] = useMutation(addNewBookWithExistingAuthor);

  const [addBookWithNewAuthor] = useMutation(addNewBookWithNewAuthor);

  const isNewAuthor = authorType === 'existing';

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit((form: NewBookWithExsitingAuthor) => {
      const commonField = extractFields(form, ['title', 'pageAmount']);
      if (isNewAuthor) {
        addBookWithNewAuthor({
          variables: {
            details: {
              ...commonField,
              authorName: form.author,
              pageAmount: Number(form.pageAmount),
            },
          },
        });
      } else {
        addBookWithExistingAuthor({
          variables: {
            details: {
              ...commonField,
              authorId: form.author,
              pageAmount: Number(form.pageAmount),
            },
          },
        });
      }
      onAdd();
    });
  };

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    dispatch({ name, value });
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthorType(event.target.value as AuthorType);
  };

  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      {addNewBookWithExistingAuthorForm.map(({ name, type, heading }) => (
        <label htmlFor={name} key={name}>
          {heading}
          <input
            type={type}
            id={name}
            name={name}
            value={formParams[name]}
            onChange={handleFieldChange}
          />
        </label>
      ))}
      <div onChange={handleRadioChange}>
        <label htmlFor="not-exists">
          New author
          <input
            type="radio"
            name="authorType"
            id="not-exists"
            value={'new'}
            defaultChecked={isNewAuthor}
          />
        </label>

        <label htmlFor="exists">
          Exists
          <input
            type="radio"
            name="authorType"
            id="exists"
            value={'existing'}
          />
        </label>
      </div>

      <label htmlFor={'author'}>
        Author {isNewAuthor ? 'name' : 'id'}
        <input
          type="text"
          id={'author'}
          name={'author'}
          value={formParams['author']}
          onChange={handleFieldChange}
        />
      </label>
      <button type="submit">Add book</button>
    </FormWrapper>
  );
};

export default AddBookForm;
