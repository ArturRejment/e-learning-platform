import { z } from 'zod';

export const codeGenerationDtoSchema = z.object({
  count: z.number().min(1, { message: 'Amount must be greater than 0.' }),
});

export type CodeGenerationDto = z.infer<typeof codeGenerationDtoSchema>;
