import { useState } from 'react';

import { useGenerateCodesMutation } from '../../../services';
import { CodeGenerationDto } from '../../../types/dtos/code-generation.dto';
import CodeGenerationForm from '../CodeGenerationForm';

const CodeGeneration = () => {
  const [error, setError] = useState<string>('');
  const [generateCodes, { isLoading, data: codes }] =
    useGenerateCodesMutation();

  const handleJoinCourse = async (
    postData: CodeGenerationDto,
    reset: () => void,
  ) => {
    try {
      await generateCodes(postData).unwrap();
      reset();
    } catch (err) {
      setError('Codes Generation Unsuccessfull!');
    }
  };

  return (
    <div className="wrapper">
      <CodeGenerationForm
        submit={handleJoinCourse}
        error={error}
        isLoading={isLoading}
      />
      {codes}
    </div>
  );
};

export default CodeGeneration;
