import { eLearningPlatformApi } from '../apis';
import { CodeGenerationDto } from '../types/dtos';

export const codeApi = eLearningPlatformApi.injectEndpoints({
  endpoints: (build) => ({
    generateCodes: build.mutation<string[], CodeGenerationDto>({
      query: (data: CodeGenerationDto) => ({
        url: 'code_generate/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGenerateCodesMutation } = codeApi;
export const {
  endpoints: { generateCodes },
} = codeApi;
