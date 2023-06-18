import { ExamAnswersDto, ExamQuestionsForm } from '../../types/dtos';

export const parseExamQuestionsToExamAnswers = (
  examQuestions: ExamQuestionsForm,
): ExamAnswersDto =>
  Object.entries(examQuestions).map(([questionId, answer]) => ({
    questionId: parseInt(questionId, 10),
    answer,
  }));

export const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '70px 50px',
  },
};
