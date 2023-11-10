import { useMutation, useQuery } from '@apollo/client';
import { ChangeEvent, FormEvent, useState } from 'react';

import InputField from '../UI/InputField';
import RadioButton from '../UI/RadioButton';
import SelectAuthor from '../UI/SelectAuthor';
import {
  addNewBookWithExistingAuthor,
  addNewBookWithNewAuthor,
  getAuthors,
  newBookWithExistingAuthorSchema,
} from '@/constants';
import { addNewBookWithExistingAuthorForm } from '@/constants/staticText';
import { extractFields } from '@/helpers';
import { useForm } from '@/hooks/useForm';
import { AuthorsResponse, NewBookWithExsitingAuthor } from '@/interfaces';

import { FormWrapper, RadioButtonsWrapper, SubmitButton } from './styled';
import { AddBookFormProps, AuthorType } from './types';

const initialState = {
  title: '',
  pageAmount: 0,
  author: '',
};

const AddBookForm = ({ onAfterBookAdd }: AddBookFormProps) => {
  const [authorType, setAuthorType] = useState<AuthorType>('new');
  const { dispatch, formParams, handleSubmit } =
    useForm<NewBookWithExsitingAuthor>(
      initialState,
      newBookWithExistingAuthorSchema,
    );

  const [addBookWithExistingAuthor] = useMutation(addNewBookWithExistingAuthor);

  const [addBookWithNewAuthor] = useMutation(addNewBookWithNewAuthor);

  const { data, refetch: refetchAuthors } =
    useQuery<AuthorsResponse>(getAuthors);

  const isNewAuthor = authorType === 'new';

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
        refetchAuthors();
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
      onAfterBookAdd();
      dispatch({ name: 'reset' });
    });
  };

  const handleFieldChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    dispatch({ name, value });
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthorType(event.target.value as AuthorType);
    dispatch({ name: 'resetField', value: 'author' });
  };

  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      {addNewBookWithExistingAuthorForm.map(({ name, type, heading }) => (
        <InputField
          type={type}
          label={heading}
          id={name}
          key={name}
          name={name}
          value={formParams[name]}
          onChange={handleFieldChange}
        />
      ))}
      <RadioButtonsWrapper onChange={handleRadioChange}>
        <RadioButton
          name="authorType"
          id="not-exists"
          value={'new'}
          label={'New author'}
          defaultChecked={isNewAuthor}
        />
        <RadioButton
          label={'Existing author'}
          name="authorType"
          id="exists"
          value={'existing'}
          defaultChecked={!isNewAuthor}
        />
      </RadioButtonsWrapper>

      {isNewAuthor ? (
        <InputField
          type="text"
          label={'Author name'}
          id={'author'}
          name={'author'}
          value={formParams['author']}
          onChange={handleFieldChange}
        />
      ) : (
        <SelectAuthor
          label={'Author name'}
          authors={data?.authors}
          name={'author'}
          value={formParams['author']}
          onChange={handleFieldChange}
        />
      )}
      <SubmitButton type="submit">Add book</SubmitButton>
    </FormWrapper>
  );
};

export default AddBookForm;
