import './ExamQuestions.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  ExamAnswersDto,
  ExamQuestionsForm,
  examQuestionsFormSchema,
  QuestionDto,
} from '../../../types/dtos';
import RadioButtons from '../../common/RadioButtons';
import { Spinner } from '../../utils';
import { parseExamQuestionsToExamAnswers } from '../helpers';

type Props = {
  questions: QuestionDto[];
  submit: (answers: ExamAnswersDto) => void;
  isLoading: boolean;
};

const ExamQuestions = ({ questions, submit, isLoading }: Props) => {
  const { control, handleSubmit } = useForm<ExamQuestionsForm>({
    resolver: zodResolver(examQuestionsFormSchema),
  });

  const onSubmit: SubmitHandler<ExamQuestionsForm> = (data) => {
    const examAnswers = parseExamQuestionsToExamAnswers(data);
    submit(examAnswers);
  };

  return (
    <div className="exam-questions">
      <form onSubmit={handleSubmit(onSubmit)}>
        {questions?.map(
          ({ id, question, answerA, answerB, answerC, answerD }, idx) => (
            <RadioButtons
              key={id}
              name={`${id}`}
              label={`${idx + 1}. ${question}`}
              control={control}
              options={[
                { value: 'a', label: answerA },
                { value: 'b', label: answerB },
                { value: 'c', label: answerC },
                { value: 'd', label: answerD },
              ]}
            />
          ),
        )}
        <button className="exam-questions__button" type="submit">
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ExamQuestions;
