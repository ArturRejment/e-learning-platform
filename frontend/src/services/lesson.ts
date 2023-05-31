import { eLearningPlatformApi } from '../apis';
import { LessonDetailDto } from '../types/dtos';

export const lessonApi = eLearningPlatformApi.injectEndpoints({
  endpoints: (build) => ({
    getLesson: build.query<LessonDetailDto, string>({
      query: (lessonId) => ({
        url: `lesson/${lessonId}/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetLessonQuery } = lessonApi;
export const {
  endpoints: { getLesson },
} = lessonApi;
