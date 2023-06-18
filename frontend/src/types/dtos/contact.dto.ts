import { z } from 'zod';

export const courseFeedbackDtoSchema = z.object({
  courseName: z.string().min(1, { message: 'Course name is required' }),
  courseFeedback: z.string().min(1, { message: 'Course feedback is required' }),
});

export type CourseFeedbackDto = z.infer<typeof courseFeedbackDtoSchema>;

export const siteFeedbackDtoSchema = z.object({
  siteFeedback: z.string().min(1, { message: 'Site feedback is required' }),
});

export type SiteFeedbackDto = z.infer<typeof siteFeedbackDtoSchema>;
