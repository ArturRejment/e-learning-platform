import './CourseList.scss';

import { useGetCoursesQuery } from '../../../services';
import { Spinner } from '../../utils';
import CourseListElement from '../CourseListElement';

const CourseList = () => {
  const { data, error, isLoading } = useGetCoursesQuery();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error</div>;

  return (
    <div className="course-list">
      {data?.map((course) => (
        <div key={course.id}>
          <CourseListElement course={course} />
        </div>
      ))}
    </div>
  );
};

export default CourseList;
