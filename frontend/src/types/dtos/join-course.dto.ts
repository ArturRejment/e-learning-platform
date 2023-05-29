import { z } from 'zod';

export const joinCourseDtoSchema = z.object({
  code: z
    .string()
    .min(1, { message: 'Code is required' })
    .max(20, { message: 'Code must be at most 20 characters' }),
});

export type JoinCourseDto = z.infer<typeof joinCourseDtoSchema>;
