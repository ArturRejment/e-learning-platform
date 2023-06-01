import { LessonPreviewDto } from './lesson.dto';

export type CoursePreviewDto = {
  id: string;
  name: string;
  description: string;
};

export type CourseDetailDto = CoursePreviewDto & {
  exams?: string[];
  lessons?: LessonPreviewDto[];
};
