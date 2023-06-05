import { eLearningPlatformApi } from '../apis';
import { RatingDto } from '../types/dtos';

export const ratingApi = eLearningPlatformApi.injectEndpoints({
  endpoints: (build) => ({
    create: build.mutation<void, RatingDto>({
      query: (code: RatingDto) => ({
        url: 'rating/',
        method: 'POST',
        body: code,
      }),
    }),
  }),
});

export const { useCreateMutation } = ratingApi;
export const {
  endpoints: { create },
} = ratingApi;
