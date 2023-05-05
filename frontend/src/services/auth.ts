import { eLearningPlatformApi } from '../apis';
import { LoginDto, LoginResponseDto, RegisterDto, Token, User } from '../types';

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
    verifyToken: build.query<void, Token>({
      query: (token: Token) => ({
        url: 'auth/token/verify',
        method: 'POST',
        body: token,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyTokenQuery } =
  authApi;
export const {
  endpoints: { login, register },
} = authApi;
