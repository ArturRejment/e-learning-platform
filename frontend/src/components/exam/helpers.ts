import { ExamAnswersDto, ExamQuestionsForm } from '../../types/dtos';

export const parseExamQuestionsToExamAnswers = (
  examQuestions: ExamQuestionsForm,
): ExamAnswersDto => ({
  answers: Object.entries(examQuestions).map(([questionId, answer]) => ({
    questionId: parseInt(questionId, 10),
    answer,
  })),
});
