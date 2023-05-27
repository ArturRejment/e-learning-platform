import { z } from 'zod';

export type ExamDto = {
  id: number;
  description: string;
  questions: QuestionDto[];
};

export type QuestionDto = {
  id: number;
  question: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
};

export const examQuestionsFormSchema = z.record(
  z.string().min(1),
  z.string().min(1),
);

export type ExamQuestionsForm = z.infer<typeof examQuestionsFormSchema>;

export type ExamAnswersDto = {
  answers: {
    questionId: number;
    answer: string;
  }[];
};
export type ExamAnswersRequestDto = {
  examId: string;
  answers: ExamAnswersDto;
};
