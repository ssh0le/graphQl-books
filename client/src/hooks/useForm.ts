import { useEffect, useMemo, useReducer, useState } from 'react';
import { AnyObject, ObjectSchema } from 'yup';

import { isCorrectYupError } from '@/helpers';

import { FormAction, ValidationErrors } from './types';

const createReducer = <T extends { [key: string]: unknown }>(
  initialState: T,
) => {
  return (state: T, action: FormAction<T>): T => {
    const { name, value } = action;
    if (value !== undefined && name in state) {
      return {
        ...state,
        [name]: value,
      };
    } else if (name === 'resetField' && value) {
      return {
        ...state,
        [value as string]: initialState[value as string],
      };
    } else if (name === 'updateState') {
      return {
        ...(value as T),
      };
    } else if (name === 'reset') {
      return initialState;
    } else {
      return state;
    }
  };
};

export const useForm = <FormType extends AnyObject>(
  initialState: FormType,
  schema: ObjectSchema<FormType>,
) => {
  const reducer = useMemo(() => createReducer(initialState), [initialState]);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [formParams, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (isTouched) {
      const validateTouchedForm = async () => {
        await validateForm();
      };

      validateTouchedForm();
    }
  }, [formParams]);

  const validateForm = (resolve?: () => void) => {
    return schema
      .validate(formParams, { abortEarly: false })
      .then(() => {
        setErrors({});
        if (resolve) {
          resolve();
        }
      })
      .catch((error) => {
        if (!isCorrectYupError(error)) {
          setErrors({});
          return;
        }
        setIsTouched(true);
        setErrors(
          error.inner.reduce((acc, { path, message }) => {
            if (path) {
              return { ...acc, [path]: message };
            }
            return acc;
          }, {}),
        );
      });
  };

  const handleSubmit = async (submitFunction: (form: FormType) => void) => {
    await validateForm(() => {
      setIsTouched(false);
      submitFunction(formParams);
    });
  };

  return { handleSubmit, errors, dispatch, formParams };
};
