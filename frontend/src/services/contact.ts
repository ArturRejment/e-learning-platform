import { eLearningPlatformApi } from '../apis';
import { CourseFeedbackDto, SiteFeedbackDto } from '../types/dtos/contact.dto';

export const contactApi = eLearningPlatformApi.injectEndpoints({
  endpoints: (build) => ({
    submitCourseFeedback: build.mutation<string, CourseFeedbackDto>({
      query: ({ courseName, courseFeedback }) => ({
        url: '/course-feedback/',
        method: 'POST',
        body: { courseName, courseFeedback },
      }),
    }),
    submitSiteFeedback: build.mutation<string, SiteFeedbackDto>({
      query: ({ siteFeedback }) => ({
        url: '/site-feedback/',
        method: 'POST',
        body: { siteFeedback },
      }),
    }),
  }),
});

export const {
  useSubmitCourseFeedbackMutation,
  useSubmitSiteFeedbackMutation,
} = contactApi;
export const {
  endpoints: { submitCourseFeedback, submitSiteFeedback },
} = contactApi;
