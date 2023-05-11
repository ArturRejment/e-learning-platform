import { z } from 'zod';

export const courseCodeGenerationDtoSchema = z.object({
  amount: z.number().min(1, { message: 'Amount must be greater than 0.' }),
  courseId: z.string(),
});

export type CourseCodeGenerationDto = z.infer<
  typeof courseCodeGenerationDtoSchema
>;
