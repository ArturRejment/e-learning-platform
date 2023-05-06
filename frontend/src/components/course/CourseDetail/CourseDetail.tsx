import { useParams } from 'react-router-dom';
import { useGetCourseQuery } from '../../../services';
import { Course } from '../../../types';

const CourseDetail = () => {
  const { id } = useParams();
  const { data } = useGetCourseQuery(id);

  return (
    <div className="course_detail">
      <div>{data?.name}</div>
      <div>{data?.description}</div>
    </div>
  );
};

export default CourseDetail;
