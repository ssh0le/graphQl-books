import InputHeading from '../InputHeading';

import { SelectAuthorProps } from './interface';
import { CustomSelect, NoAuthorsMessage, SelectAuthorWrapper } from './styled';

const placeholderValue = '';

const SelectAuthor = ({
  authors,
  label,
  ...remainedProps
}: SelectAuthorProps) => {
  if (!authors) {
    return <NoAuthorsMessage>No authors</NoAuthorsMessage>;
  }

  return (
    <SelectAuthorWrapper>
      {label && <InputHeading>{label}</InputHeading>}
      <CustomSelect {...remainedProps}>
        <option value={placeholderValue} key={placeholderValue}>
          Select author
        </option>
        {authors.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </CustomSelect>
    </SelectAuthorWrapper>
  );
};

export default SelectAuthor;
