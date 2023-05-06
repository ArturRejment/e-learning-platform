import './CourseList.scss';

import { useGetCoursesQuery } from '../../../services';
import { Spinner } from '../../utils';
import CourseListElement from '../CourseListElement';

const CourseList = () => {
  const { data, error, isLoading } = useGetCoursesQuery();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error</div>;

  return (
    <div className="course_list">
      {data?.map((course) => {
        return <CourseListElement key={course.id} course={course} />;
      })}
    </div>
  );
};

export default CourseList;
