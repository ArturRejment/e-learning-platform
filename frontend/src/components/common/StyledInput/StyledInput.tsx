import './StyledInput.scss';

import { UseFormRegisterReturn } from 'react-hook-form';

type Props<T extends string> = {
  label: string;
  name: T;
  type: 'text' | 'password' | 'number';
  register: UseFormRegisterReturn<T>;
  error?: string;
};

const StyledInput = <T extends string>({
  label,
  name,
  type,
  register,
  error = '',
}: Props<T>) => {
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
        {...register}
        onBlur={(e) => {
          e.target.dispatchEvent(new Event('input', { bubbles: true }));
        }}
      />
      <p className="styled-input__error">{error}</p>
    </div>
  );
};

export default StyledInput;
