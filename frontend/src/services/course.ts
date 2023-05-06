import { eLearningPlatformApi } from '../apis';
import { Course } from '../types';

export const courseApi = eLearningPlatformApi.injectEndpoints({
  endpoints: (build) => ({
    getCourses: build.query<Course[], void>({
      query: () => ({
        url: 'course/',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCoursesQuery } = courseApi;
export const {
  endpoints: { getCourses },
} = courseApi;
