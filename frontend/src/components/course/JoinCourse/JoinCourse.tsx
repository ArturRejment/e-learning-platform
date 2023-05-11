import { useState } from 'react';

import { useJoinCourseMutation } from '../../../services';
import { FormError } from '../../../types';
import { JoinCourseDto } from '../../../types/join-course.dto';
import JoinCourseForm from '../JoinCourseForm';

const JoinCourse = () => {
  const [error, setError] = useState<string>('');
  const [backendErrors, setBackendErrors] = useState<Partial<JoinCourseDto>>(
    {},
  );
  const [joinCourse, { isLoading }] = useJoinCourseMutation();
  const handleJoinCourse = async (data: JoinCourseDto, reset: () => void) => {
    try {
      await joinCourse(data).unwrap();
      reset();
      setBackendErrors({});
      setError('');
    } catch (err) {
      setError('Joining Course Unsuccessfull!');
      const typedError: FormError = err as FormError;
      setBackendErrors(typedError.data as Partial<JoinCourseDto>);
    }
  };

  return (
    <div className="wrapper">
      <JoinCourseForm
        submit={handleJoinCourse}
        error={error}
        backendErrors={backendErrors}
        isLoading={isLoading}
      />
    </div>
  );
};

export default JoinCourse;
