import './Exam.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RouterPathParams } from '../../../assets';
import {
  useGetExamQuery,
  useSubmitExamAnswersMutation,
} from '../../../services';
import { ExamAnswersDto } from '../../../types/dtos';
import ExamErrorModal from '../ExamErrorModal';
import ExamQuestions from '../ExamQuestions';
import ExamResultsModal from '../ExamResultsModal';

const Exam = () => {
  const { examId = '' } = useParams<RouterPathParams['EXAM']>();
  const { data: { description = '', questions = [] } = {} } =
    useGetExamQuery(examId);
  const [submitAnswers, { isLoading, data: examResults, error }] =
    useSubmitExamAnswersMutation();
  const [examError, setExamError] = useState<string>('');

  useEffect(() => {
    if (error && 'data' in error) {
      setExamError(error.data as string);
    }
  }, [error]);

  const handleSubmit = (answers: ExamAnswersDto) =>
    submitAnswers({ examId, answers });

  return (
    <div className="exam">
      <div className="exam__name">Exam {examId}</div>
      <div className="exam__description">{description}</div>
      <ExamQuestions
        questions={questions}
        submit={handleSubmit}
        isLoading={isLoading}
      />
      {examError && <ExamErrorModal error={examError} />}
      {examResults && <ExamResultsModal examResults={examResults} />}
    </div>
  );
};

export default Exam;
