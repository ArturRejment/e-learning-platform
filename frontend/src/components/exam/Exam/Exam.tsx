import './Exam.scss';

import { useParams } from 'react-router-dom';

import { RouterPathParams } from '../../../assets';
import {
  useGetExamQuery,
  useSubmitExamAnswersMutation,
} from '../../../services';
import { ExamAnswersDto } from '../../../types/dtos';
import ExamQuestions from '../ExamQuestions';
import ExamResultsModal from '../ExamResultsModal';

const Exam = () => {
  const { examId = '' } = useParams<RouterPathParams['EXAM']>();
  const { data: { description = '', questions = [] } = {} } =
    useGetExamQuery(examId);
  const [submitAnswers, { isLoading, data: examResults }] =
    useSubmitExamAnswersMutation();

  const handleSubmit = (answers: ExamAnswersDto, reset: () => void) => {
    submitAnswers({ examId, answers });
    reset();
  };

  return (
    <div className="exam">
      <div className="exam__name">Exam {examId}</div>
      <div className="exam__description">{description}</div>
      <ExamQuestions
        questions={questions}
        submit={handleSubmit}
        isLoading={isLoading}
      />
      {examResults && <ExamResultsModal examResults={examResults} />}
    </div>
  );
};

export default Exam;
