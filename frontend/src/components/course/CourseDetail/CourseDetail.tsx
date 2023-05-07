import { useParams } from 'react-router-dom';

import { useGetCourseQuery } from '../../../services';

const CourseDetail = () => {
  const { id = '' } = useParams();
  const { data: { name, description } = {} } = useGetCourseQuery(id);

  return (
    <div className="course-detail">
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default CourseDetail;
