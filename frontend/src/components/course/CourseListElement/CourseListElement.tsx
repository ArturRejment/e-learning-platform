import './CourseListElement.scss';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { createPath, ROUTER_PATH } from '../../../assets';
import { CoursePreviewDto } from '../../../types/dtos';

type Props = {
  course: CoursePreviewDto;
};

const CourseListElement = ({ course }: Props) => {
  const { id, name, description } = course;
  return (
    <div className="course-list-element">
      <div className="course-list-element__name">{name}</div>
      <div className="course-list-element__description">{description}</div>
      <div className="course-list-element__status">
        Status: <span>Completed</span>
      </div>
      <Link
        className="course-list-element__link"
        to={createPath({
          path: ROUTER_PATH.COURSE_DETAIL,
          params: { courseId: id },
        })}
      >
        Learn more
        <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default CourseListElement;
