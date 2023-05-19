import { useState } from 'react';

import { useGenerateCodesMutation } from '../../../services';
import { CodeGenerationDto } from '../../../types/dtos';
import CodeGenerationForm from '../CodeGenerationForm';

const CodeGeneration = () => {
  const [error, setError] = useState<string>('');
  const [generateCodes, { isLoading, data: codes }] =
    useGenerateCodesMutation();

  const handleSubmit = async (
    postData: CodeGenerationDto,
    reset: () => void,
  ) => {
    try {
      await generateCodes(postData).unwrap();
      reset();
    } catch (err) {
      setError('Codes Generation Unsuccessful!');
    }
  };

  return (
    <div className="wrapper">
      <CodeGenerationForm
        submit={handleSubmit}
        error={error}
        isLoading={isLoading}
      />
      {codes}
    </div>
  );
};

export default CodeGeneration;
