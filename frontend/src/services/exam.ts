import { eLearningPlatformApi } from '../apis';
import { ExamAnswersRequestDto, ExamDto, ExamResultsDto } from '../types/dtos';

export const examApi = eLearningPlatformApi.injectEndpoints({
  endpoints: (build) => ({
    getExam: build.query<ExamDto, string>({
      query: (examId) => ({
        url: `exam/${examId}/`,
        method: 'GET',
      }),
      providesTags: ['Exam'],
    }),
    submitExamAnswers: build.mutation<ExamResultsDto, ExamAnswersRequestDto>({
      query: ({ examId, answers }) => ({
        url: `exam/${examId}/examine/`,
        method: 'POST',
        body: answers,
      }),
      invalidatesTags: ['Courses'],
    }),
  }),
});

export const { useGetExamQuery, useSubmitExamAnswersMutation } = examApi;
export const {
  endpoints: { getExam, submitExamAnswers },
} = examApi;
