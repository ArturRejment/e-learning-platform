import { useGenerateCodesMutation } from '../../../services';
import { CodeGenerationDto } from '../../../types/dtos';
import CodeGenerationForm from '../CodeGenerationForm';

const CodeGeneration = () => {
  const [generateCodes, { isLoading, data: codes, error }] =
    useGenerateCodesMutation();

  const handleSubmit = async (
    postData: CodeGenerationDto,
    reset: () => void,
  ) => {
    try {
      await generateCodes(postData).unwrap();
      reset();
    } catch {}
  };

  return (
    <div className="wrapper">
      <CodeGenerationForm
        submit={handleSubmit}
        error={error ? 'Codes Generation Unsuccessful!' : ''}
        isLoading={isLoading}
      />
      {codes}
    </div>
  );
};

export default CodeGeneration;
