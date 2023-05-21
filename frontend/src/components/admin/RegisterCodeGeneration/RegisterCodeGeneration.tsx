import { useGenerateRegisterCodesMutation } from '../../../services';
import { RegisterCodeGenerationDto } from '../../../types/dtos';
import RegisterCodeGenerationForm from '../RegisterCodeGenerationForm';

const RegisterCodeGeneration = () => {
  const [generateRegisterCodes, { isLoading, data: codes, error }] =
    useGenerateRegisterCodesMutation();

  const handleSubmit = async (
    postData: RegisterCodeGenerationDto,
    reset: () => void,
  ) => {
    try {
      await generateRegisterCodes(postData).unwrap();
      reset();
    } catch {}
  };

  return (
    <div className="register-code-generation">
      <RegisterCodeGenerationForm
        submit={handleSubmit}
        error={error ? 'Registration Codes Generation Unsuccessful!' : ''}
        isLoading={isLoading}
      />
      {codes?.map((code) => (
        <p key={code}>{code}</p>
      ))}
    </div>
  );
};

export default RegisterCodeGeneration;
