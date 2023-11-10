import { RadioButtonProps } from './interfaces';
import { RadioButtonHeading, RadioButtonWrapper } from './styled';

const RadioButton = ({ label, ...remainedProps }: RadioButtonProps) => {
  return (
    <RadioButtonWrapper htmlFor={remainedProps.id}>
      <input type="radio" {...remainedProps} />
      {label && <RadioButtonHeading>{label}</RadioButtonHeading>}
    </RadioButtonWrapper>
  );
};

export default RadioButton;
