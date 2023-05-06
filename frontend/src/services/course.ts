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
    getCourse: build.query<Course, string>({
      query: (courseId) => ({
        url: `course/${courseId}/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useGetCourseQuery } = courseApi;
export const {
  endpoints: { getCourses, getCourse },
} = courseApi;
