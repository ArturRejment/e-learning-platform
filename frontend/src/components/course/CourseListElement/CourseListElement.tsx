import './CourseListElement.scss';

import { Link } from 'react-router-dom';

import { createPath, RouterPath } from '../../../assets';
import { Course } from '../../../types';

type Props = {
  course: Course;
};

const CourseListElement = ({ course }: Props) => {
  const { id, name, description } = course;
  return (
    <div className="course-list-element">
      <div>{name}</div>
      <div>{description}</div>
      <div>
        <Link
          to={createPath({
            path: RouterPath.CourseDetail,
            params: { courseId: id },
          })}
        >
          Learn more!
        </Link>
      </div>
    </div>
  );
};

export default CourseListElement;
