import { eLearningPlatformApi } from '../apis';
import { Course, CourseCodeGenerationDto, JoinCourseDto } from '../types';

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
    joinCourse: build.mutation<void, JoinCourseDto>({
      query: (code: JoinCourseDto) => ({
        url: 'join/course/',
        method: 'POST',
        body: code,
      }),
    }),
    generateCourseCodes: build.mutation<string[], CourseCodeGenerationDto>({
      query: (data: CourseCodeGenerationDto) => ({
        url: 'course-join-codes/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCourseQuery,
  useJoinCourseMutation,
  useGenerateCourseCodesMutation,
} = courseApi;
export const {
  endpoints: { getCourses, getCourse, joinCourse, generateCourseCodes },
} = courseApi;
