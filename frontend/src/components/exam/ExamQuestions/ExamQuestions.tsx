import './ExamQuestions.scss';

import { QuestionDto } from '../../../types/dtos';

type Props = {
  questions: QuestionDto[];
  submit: (answers: string[]) => void;
};

const ExamQuestions = ({ questions, submit }: Props) => {
  return (
    <div className="exam-questions">
      {questions?.map(
        ({ id, question, answerA, answerB, answerC, answerD }) => (
          <div key={id} className="exam-questions__question-wrapper">
            <div className="exam-questions__question">{question}</div>
            <div className="exam-questions__answer">{answerA}</div>
            <div className="exam-questions__answer">{answerB}</div>
            <div className="exam-questions__answer">{answerC}</div>
            <div className="exam-questions__answer">{answerD}</div>
          </div>
        ),
      )}
      <button type="button" onClick={() => submit(['a', 'b', 'c', 'd'])}>
        Submit
      </button>
    </div>
  );
};

export default ExamQuestions;
