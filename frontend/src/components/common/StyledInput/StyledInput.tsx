import './StyledInput.scss';

import { ChangeEvent } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

type Props<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type: 'text' | 'password' | 'number';
  control: Control<T>;
  externalError?: string;
};

const StyledInput = <T extends FieldValues>({
  label,
  name,
  type,
  control,
  externalError,
}: Props<T>) => {
  const {
    field: { onChange, ...fieldRest },
    fieldState: { error },
  } = useController({ name, control });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(type === 'number' ? +e.target.value : e.target.value);

  const errorMessage = error?.message || externalError;

  return (
    <div className="styled-input">
      <label htmlFor={name} className="styled-input__label">
        {label}
      </label>
      <input
        id={name}
        className="styled-input__input"
        type={type}
        aria-label={name}
        onChange={onInputChange}
        {...fieldRest}
      />
      {errorMessage && <p className="styled-input__error">{errorMessage}</p>}
    </div>
  );
};

export default StyledInput;
