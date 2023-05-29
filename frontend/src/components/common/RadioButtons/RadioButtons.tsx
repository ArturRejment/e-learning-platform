import './RadioButtons.scss';

import { Control, useController } from 'react-hook-form';

type Option = { label: string; value: number | string };

type Props = {
  name: string;
  label: string;
  control: Control;
  options: Option[];
};

const RadioButtons = ({ name, label, control, options }: Props) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="radio-buttons">
      <div className="radio-buttons__header-label">{label}</div>
      <div className="radio-buttons__options">
        {options.map((option) => (
          <div className="radio-buttons__group" key={option.label}>
            <input
              className="radio-buttons__input"
              id={option.label}
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            <label className="radio-buttons__label" htmlFor={option.label}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <div className="radio-buttons__error">{error.message}</div>}
    </div>
  );
};

export default RadioButtons;
