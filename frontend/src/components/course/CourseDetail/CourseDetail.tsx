import './CourseDetail.scss';

import { Link, useParams } from 'react-router-dom';

import { createPath, ROUTER_PATH, RouterPathParams } from '../../../assets';
import { useGetCourseQuery } from '../../../services';
import CourseStatus from '../CourseStatus';

const CourseDetail = () => {
  const { courseId = '' } = useParams<RouterPathParams['COURSE_DETAIL']>();
  const { data: { name, description, exams, lessons, examStatus } = {} } =
    useGetCourseQuery(courseId);

  return (
    <div className="course-detail">
      <div className="course-detail__name">
        {name}
        <div className="course-detail__status">
          <CourseStatus status={examStatus} />
        </div>
      </div>
      <div className="course-detail__description">{description}</div>
      <div className="course-detail__exams-wrapper">
        <p>Exams available for this course:</p>
        {!exams?.length && <span>No exams</span>}
        <div className="course-detail__exams">
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
              {`Exam ${idx + 1}`}
            </Link>
          ))}
        </div>
      </div>
      <div className="course-detail__lessons-wrapper">
        <p>Lessons available for this course:</p>
        {!lessons?.length && <span>No lessons</span>}
        <div className="course-detail__lessons">
          {lessons?.map(({ id: lessonId, name: lessonName }) => (
            <Link
              className="course-detail__lesson"
              key={lessonId}
              title="Go to Lesson"
              to={createPath({
                path: ROUTER_PATH.LESSON_DETAIL,
                params: { lessonId },
              })}
            >
              {lessonName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
