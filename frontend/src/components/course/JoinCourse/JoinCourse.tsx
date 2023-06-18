import './JoinCourse.scss';

import { useEffect, useState } from 'react';

import { useJoinCourseMutation } from '../../../services';
import { JoinCourseDto } from '../../../types/dtos';
import JoinCourseForm from '../JoinCourseForm';

const JoinCourse = () => {
  const [backendErrors, setBackendErrors] = useState<Partial<JoinCourseDto>>(
    {},
  );
  const [joinCourse, { isLoading, error }] = useJoinCourseMutation();

  useEffect(() => {
    if (error && 'data' in error) {
      setBackendErrors(error.data as Partial<JoinCourseDto>);
    }
  }, [error]);

  const handleSubmit = async (data: JoinCourseDto, reset: () => void) => {
    try {
      await joinCourse(data).unwrap();
      reset();
      setBackendErrors({});
    } catch {}
  };

  return (
    <div className="join-course">
      <JoinCourseForm
        submit={handleSubmit}
        error={error ? 'Joining Course Unsuccessful!' : ''}
        backendErrors={backendErrors}
        isLoading={isLoading}
      />
    </div>
  );
};

export default JoinCourse;
