import './GeneratedCodes.scss';

import { FaRegCopy } from 'react-icons/fa';

type Props = {
  header: string;
  codes: string[];
};

const GeneratedCodes = ({ header, codes }: Props) => {
  return (
    <div className="generated-codes">
      <span>{header}</span>
      {codes.map((code) => (
        <button
          type="button"
          key={code}
          onKeyDown={() => {
            navigator.clipboard.writeText(code);
          }}
          onClick={() => {
            navigator.clipboard.writeText(code);
          }}
        >
          {code}
          <FaRegCopy />
        </button>
      ))}
    </div>
  );
};

export default GeneratedCodes;
