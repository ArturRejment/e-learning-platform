import { eLearningPlatformApi } from '../apis';
import { ExamDto } from '../types/dtos';

export const examApi = eLearningPlatformApi.injectEndpoints({
  endpoints: (build) => ({
    getExam: build.query<ExamDto, string>({
      query: (examId) => ({
        url: `exam/${examId}/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetExamQuery } = examApi;
export const {
  endpoints: { getExam },
} = examApi;
