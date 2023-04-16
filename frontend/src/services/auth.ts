import { eLearningPlatformApi } from '../apis';
import { LoginDto, LoginResponseDto, RegisterDto, User } from '../types';

export const authApi = eLearningPlatformApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponseDto, LoginDto>({
      query: (credentials: LoginDto) => ({
        url: 'auth/token/obtain',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: build.mutation<User, RegisterDto>({
      query: (credentials: RegisterDto) => ({
        url: 'auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
export const {
  endpoints: { login, register },
} = authApi;
