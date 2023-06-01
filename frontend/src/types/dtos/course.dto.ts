import { LessonPreviewDto } from './lesson.dto';

export type CourseDto = {
  id: string;
  name: string;
  description: string;
  exams?: string[];
  lessons?: LessonPreviewDto[];
};
