import './CourseStatus.scss';

import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from 'react-icons/fa';

import { ExamStatus } from '../../../types/dtos';

type Props = {
  status: ExamStatus;
};

const CourseStatus = ({ status }: Props) => {
  if (status === ExamStatus.Failed)
    return (
      <FaTimesCircle
        title="Exam Failed"
        className="course-status course-status--failed"
      />
    );
  if (status === ExamStatus.Passed)
    return (
      <FaCheckCircle
        title="Completed"
        className="course-status course-status--passed"
      />
    );

  return (
    <FaHourglassHalf
      title="In Progress"
      className="course-status course-status--in-progress"
    />
  );
};

export default CourseStatus;
