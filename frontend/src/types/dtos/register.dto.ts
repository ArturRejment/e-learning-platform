import { z } from 'zod';

export const registerRequestDtoSchema = z
  .object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().min(1, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    rePassword: z.string().min(8, { message: 'Confirm Password is required' }),
    registrationToken: z
      .string()
      .min(1, { message: 'Registration Token is required' }),
  })
  .refine((data) => data.password === data.rePassword, {
    path: ['confirmPassword'],
    message: "Passwords don't match",
  });

export type RegisterRequestDto = z.infer<typeof registerRequestDtoSchema>;
