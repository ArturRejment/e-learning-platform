import { z } from 'zod';

export const joinCourseDtoSchema = z.object({
  code: z.string().max(20, { message: 'Code must be at most 20 characters' }),
});

export type LoginDto = z.infer<typeof joinCourseDtoSchema>;

export type JoinCourseDto = {
  code: string;
};
