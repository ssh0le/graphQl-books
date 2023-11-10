import InputHeading from '../InputHeading';

import { InoutFieldProps as InputFieldProps } from './interfaces';
import { CustomInput, InputFieldWrapper } from './styled';

const InputField = ({ label, ...remainedProps }: InputFieldProps) => {
  return (
    <InputFieldWrapper>
      {label && <InputHeading>{label}</InputHeading>}
      <CustomInput {...remainedProps} />
    </InputFieldWrapper>
  );
};

export default InputField;
