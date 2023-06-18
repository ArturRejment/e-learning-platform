import './CourseList.scss';

import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';
import { useGetCoursesQuery } from '../../../services';
import { FullPageSpinner } from '../../utils';
import CourseListElement from '../CourseListElement';

const CourseList = () => {
  const { data, error, isLoading } = useGetCoursesQuery();

  if (isLoading) return <FullPageSpinner />;
  if (error)
    return (
      <div className="course-list__error">Something went wrong. Try again!</div>
    );

  return (
    <div className="course-list">
      {!data?.length && (
        <h3 className="course-list__info">
          You are not enrolled in any course
          <Link className="course-list__join" to={ROUTER_PATH.JOIN_COURSE}>
            Join Course
          </Link>
        </h3>
      )}
      {data?.map((course) => (
        <div key={course.id}>
          <CourseListElement course={course} />
        </div>
      ))}
    </div>
  );
};

export default CourseList;
