import './CourseListElement.scss';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { createPath, ROUTER_PATH } from '../../../assets';
import { CoursePreviewDto } from '../../../types/dtos';
import CourseStatus from '../CourseStatus';

type Props = {
  course: CoursePreviewDto;
};

const CourseListElement = ({ course }: Props) => {
  const { id, name, description, examStatus } = course;

  return (
    <div className="course-list-element">
      <div className="course-list-element__name">{name}</div>
      <div className="course-list-element__description">{description}</div>
      <div className="course-list-element__status">
        <CourseStatus status={examStatus} />
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
