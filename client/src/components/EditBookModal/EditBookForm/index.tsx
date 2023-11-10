import { useMutation, useQuery } from '@apollo/client';
import { ChangeEvent, FormEvent, useCallback, useEffect } from 'react';

import InputField from '@/components/UI/InputField';
import {
  bookMainFormProperties,
  editBookSchema,
  getBook,
  updateBook as updateBookMutation,
} from '@/constants';
import { extractFields } from '@/helpers';
import { useForm } from '@/hooks/useForm';
import { BookResponse, CommonBookProperties } from '@/interfaces';

import { EditBookFormProps } from './interfaces';
import { FormWrapper } from './styled';

const initialState: CommonBookProperties = {
  title: '',
  pageAmount: 0,
};

const EditFormBook = ({ bookId }: EditBookFormProps) => {
  const { data, loading } = useQuery<BookResponse>(getBook, {
    variables: {
      id: bookId,
    },
  });
  const { dispatch, formParams, handleSubmit } = useForm<CommonBookProperties>(
    data?.book ?? initialState,
    editBookSchema,
  );
  const [updateBook, { data: updatedData }] =
    useMutation<BookResponse>(updateBookMutation);

  const updateFormState = useCallback((newState?: CommonBookProperties) => {
    if (newState) {
      dispatch({
        name: 'updateState',
        value: extractFields(newState, ['title', 'pageAmount']),
      });
    }
  }, []);

  useEffect(() => {
    updateFormState(data?.book);
  }, [data, updateFormState]);

  useEffect(() => {
    updateFormState(updatedData?.book);
  }, [updatedData, updateFormState]);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit((form: CommonBookProperties) => {
      updateBook({
        variables: {
          details: { ...form, id: bookId, pageAmount: Number(form.pageAmount) },
        },
      });
    });
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({ name, value });
  };

  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        bookMainFormProperties.map(({ name, type, heading }) => (
          <InputField
            type={type}
            label={heading}
            id={name}
            key={name}
            name={name}
            value={formParams[name]}
            onChange={handleFieldChange}
          />
        ))
      )}
      <button type="submit">Save</button>
    </FormWrapper>
  );
};

export default EditFormBook;
