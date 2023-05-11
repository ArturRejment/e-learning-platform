import { useState } from 'react';

import {
  useGenerateCourseCodesMutation,
  useGetCoursesQuery,
} from '../../../services';
import { CourseCodeGenerationDto } from '../../../types/course-code-generation.dto';
import CourseCodeGenerationForm from '../CourseCodeGenerationForm';

const CourseCodeGeneration = () => {
  const [error, setError] = useState<string>('');
  const [generateCourseCodes, { isLoading, data: codes }] =
    useGenerateCourseCodesMutation();
  const { data = [] } = useGetCoursesQuery();

  const options = data?.map(({ name, id }) => ({
    label: name,
    value: id,
  }));

  const handleJoinCourse = async (
    postData: CourseCodeGenerationDto,
    reset: () => void,
  ) => {
    try {
      await generateCourseCodes(postData).unwrap();
      reset();
    } catch (err) {
      setError('Codes Generation Unsuccessfull!');
    }
  };

  return (
    <div className="wrapper">
      <CourseCodeGenerationForm
        submit={handleJoinCourse}
        error={error}
        isLoading={isLoading}
        options={options}
      />
      {codes}
    </div>
  );
};

export default CourseCodeGeneration;
