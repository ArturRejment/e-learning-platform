import { z } from 'zod';

export const courseCodeGenerationDtoSchema = z.object({
  amount: z
    .number({
      required_error: 'Amount is required',
      invalid_type_error: 'Amount is required',
    })
    .min(1, { message: 'Amount must be greater than 0.' }),
  courseId: z.string({
    required_error: 'Course is required',
    invalid_type_error: 'Course is required',
  }),
});

export type CourseCodeGenerationDto = z.infer<
  typeof courseCodeGenerationDtoSchema
>;
