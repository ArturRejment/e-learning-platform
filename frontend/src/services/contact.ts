import { eLearningPlatformApi } from '../apis';
import { CourseFeedbackDto, SiteFeedbackDto } from '../types/dtos/contact.dto';

export const contactApi = eLearningPlatformApi.injectEndpoints({
  endpoints: (build) => ({
    submitCourseFeedback: build.mutation<string, CourseFeedbackDto>({
      query: ({ courseName, courseFeedback }) => ({
        url: '', //TODO Nie ma jeszcze endpointu. Trzeba go dorobić i wrzucić tu
        method: 'POST',
        body: { courseName, courseFeedback },
      }),
    }),
    submitSiteFeedback: build.mutation<string, SiteFeedbackDto>({
      query: ({ siteFeedback }) => ({
        url: '',//TODO Nie ma jeszcze endpointu. Trzeba go dorobić i wrzucić tu
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
