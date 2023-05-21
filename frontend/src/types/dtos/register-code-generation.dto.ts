import { z } from 'zod';

export const registerCodeGenerationDtoSchema = z.object({
  count: z.number().min(1, { message: 'Amount must be greater than 0.' }),
});

export type RegisterCodeGenerationDto = z.infer<
  typeof registerCodeGenerationDtoSchema
>;
