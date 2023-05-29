import './CourseDetail.scss';

import { Link, useParams } from 'react-router-dom';

import { createPath, ROUTER_PATH, RouterPathParams } from '../../../assets';
import { useGetCourseQuery } from '../../../services';

const CourseDetail = () => {
  const { courseId = '' } = useParams<RouterPathParams['COURSE_DETAIL']>();
  const { data: { name, description, exams } = {} } =
    useGetCourseQuery(courseId);
  return (
    <div className="course-detail">
      <div className="course-detail__name">{name}</div>
      <div className="course-detail__description">{description}</div>
      {exams?.map((examId, idx) => (
        <Link
          className="course-detail__exam"
          key={examId}
          title="Start Exam"
          to={createPath({
            path: ROUTER_PATH.EXAM,
            params: { examId },
          })}
        >
          {`Go to Exam ${idx + 1}`}
        </Link>
      ))}
    </div>
  );
};

export default CourseDetail;
