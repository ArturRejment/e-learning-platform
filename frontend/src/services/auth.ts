import { eLearningPlatformApi } from '../apis';
import {
  LoginRequestDto,
  LoginResponseDto,
  RegisterRequestDto,
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
      invalidatesTags: ['User'],
    }),
    register: build.mutation<UserDto, RegisterRequestDto>({
      query: (credentials: RegisterRequestDto) => ({
        url: 'auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUser: build.query<UserDto, void>({
      query: () => ({
        url: 'user/me/',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserQuery } =
  authApi;
export const {
  endpoints: { login, register, getUser },
} = authApi;
