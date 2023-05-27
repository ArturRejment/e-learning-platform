import './Exam.scss';

import { useParams } from 'react-router-dom';

import { RouterPathParams } from '../../../assets';
import { useGetExamQuery } from '../../../services';
import ExamQuestions from '../ExamQuestions';

const Exam = () => {
  const { examId = '' } = useParams<RouterPathParams['EXAM']>();
  const { data: { description = '', questions = [] } = {} } =
    useGetExamQuery(examId);

  const handleSubmit = (answers: string[]) => {
    console.log('submitted', answers);
  };

  return (
    <div className="exam">
      <div className="exam__name">Exam {examId}</div>
      <div className="exam__description">{description}</div>
      <ExamQuestions questions={questions} submit={handleSubmit} />
    </div>
  );
};

export default Exam;
