import './CourseCodeGeneration.scss';

import { useGenerateCourseCodesMutation } from '../../../services';
import { CourseCodeGenerationDto } from '../../../types/dtos';
import CourseCodeGenerationForm from '../CourseCodeGenerationForm';
import GeneratedCodes from '../GeneratedCodes';

const CourseCodeGeneration = () => {
  const [generateCourseCodes, { isLoading, data: codes, error }] =
    useGenerateCourseCodesMutation();

  const handleSubmit = async (
    postData: CourseCodeGenerationDto,
    reset: () => void,
  ) => {
    try {
      await generateCourseCodes(postData).unwrap();
      reset();
    } catch {}
  };

  return (
    <div className="course-code-generation">
      <CourseCodeGenerationForm
        submit={handleSubmit}
        error={error ? 'Codes Generation Unsuccessful!' : ''}
        isLoading={isLoading}
      />
      {codes?.length && (
        <GeneratedCodes header="Generated course codes:" codes={codes} />
      )}
    </div>
  );
};

export default CourseCodeGeneration;
