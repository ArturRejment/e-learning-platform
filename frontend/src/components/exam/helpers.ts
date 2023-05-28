import { ExamAnswersDto, ExamQuestionsForm } from '../../types/dtos';

export const parseExamQuestionsToExamAnswers = (
  examQuestions: ExamQuestionsForm,
): ExamAnswersDto =>
  Object.entries(examQuestions).map(([questionId, answer]) => ({
    questionId: parseInt(questionId, 10),
    answer,
  }));
