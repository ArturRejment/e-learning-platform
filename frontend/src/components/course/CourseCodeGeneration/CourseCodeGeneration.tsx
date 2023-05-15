import { useState } from 'react';

import { useGenerateCourseCodesMutation } from '../../../services';
import { CourseCodeGenerationDto } from '../../../types/dtos';
import CourseCodeGenerationForm from '../CourseCodeGenerationForm';

const CourseCodeGeneration = () => {
  const [error, setError] = useState<string>('');
  const [generateCourseCodes, { isLoading, data: codes }] =
    useGenerateCourseCodesMutation();

  const handleSubmit = async (
    postData: CourseCodeGenerationDto,
    reset: () => void,
  ) => {
    try {
      await generateCourseCodes(postData).unwrap();
      reset();
    } catch (err) {
      setError('Codes Generation Unsuccessful!');
    }
  };

  return (
    <div className="wrapper">
      <CourseCodeGenerationForm
        submit={handleSubmit}
        error={error}
        isLoading={isLoading}
      />
      <div>
        {codes?.map((code) => (
          <p key={code}>{code}</p>
        ))}
      </div>
    </div>
  );
};

export default CourseCodeGeneration;
