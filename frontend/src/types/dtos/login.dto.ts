import { z } from 'zod';

export const loginRequestDtoSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});

export type LoginRequestDto = z.infer<typeof loginRequestDtoSchema>;

export type LoginResponseDto = {
  access: string;
  refresh: string;
};
