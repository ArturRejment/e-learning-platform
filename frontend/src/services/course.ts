import { eLearningPlatformApi } from '../apis';
import { Course } from '../types';
import { JoinCourseDto } from '../types/join-course.dto';

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
  }),
});

export const { useGetCoursesQuery, useGetCourseQuery, useJoinCourseMutation } =
  courseApi;
export const {
  endpoints: { getCourses, getCourse, joinCourse },
} = courseApi;
