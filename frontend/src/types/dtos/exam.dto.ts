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
