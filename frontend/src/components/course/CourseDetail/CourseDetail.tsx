import { useParams } from 'react-router-dom';

import { RouterPathParams } from '../../../assets';
import { useGetCourseQuery } from '../../../services';

const CourseDetail = () => {
  const { courseId = '' } = useParams<RouterPathParams['CourseDetail']>();
  const { data: { name, description } = {} } = useGetCourseQuery(courseId);

  return (
    <div className="course-detail">
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default CourseDetail;
