import { eLearningPlatformApi } from '../apis';
import { RegisterCodeGenerationDto } from '../types/dtos';

export const registerCodeApi = eLearningPlatformApi.injectEndpoints({
  endpoints: (build) => ({
    generateRegisterCodes: build.mutation<string[], RegisterCodeGenerationDto>({
      query: (data: RegisterCodeGenerationDto) => ({
        url: 'code_generate/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGenerateRegisterCodesMutation } = registerCodeApi;
export const {
  endpoints: { generateRegisterCodes },
} = registerCodeApi;
