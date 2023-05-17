import './CourseListElement.scss';

import { Link } from 'react-router-dom';

import { createPath, ROUTER_PATH } from '../../../assets';
import { CourseDto } from '../../../types/dtos';

type Props = {
  course: CourseDto;
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
            path: ROUTER_PATH.COURSE_DETAIL,
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
