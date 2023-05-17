import { eLearningPlatformApi } from '../apis';
import {
  LoginRequestDto,
  LoginResponseDto,
  RegisterRequestDto,
  TokenDto,
  UserDto,
} from '../types/dtos';

export const authApi = eLearningPlatformApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponseDto, LoginRequestDto>({
      query: (credentials: LoginRequestDto) => ({
        url: 'auth/token/obtain',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: build.mutation<UserDto, RegisterRequestDto>({
      query: (credentials: RegisterRequestDto) => ({
        url: 'auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    verifyToken: build.query<void, TokenDto>({
      query: (token: TokenDto) => ({
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
