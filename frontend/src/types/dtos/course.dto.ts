import { LessonPreviewDto } from './lesson.dto';

export const enum ExamStatus {
  Failed = 'Failed',
  Passed = 'Passed',
  NotTaken = 'Not taken',
}

export type CoursePreviewDto = {
  id: string;
  name: string;
  description: string;
  examStatus: ExamStatus;
};

export type CourseDetailDto = CoursePreviewDto & {
  exams?: string[];
  lessons?: LessonPreviewDto[];
};
