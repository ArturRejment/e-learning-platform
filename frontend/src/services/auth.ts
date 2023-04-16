import { eLearningPlatformApi } from '../apis';
import { LoginDto, LoginResponseDto } from '../types';

export const authApi = eLearningPlatformApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponseDto, LoginDto>({
      query: (credentials: LoginDto) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
export const {
  endpoints: { login },
} = authApi;
