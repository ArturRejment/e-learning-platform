import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCourses } from '../../services';
import { CoursePreviewDto } from '../../types/dtos';

type InitialState = {
  courses: CoursePreviewDto[];
};

const initialState: InitialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET COURSES FULFILLED
      .addMatcher(
        getCourses.matchFulfilled,
        (state, action: PayloadAction<CoursePreviewDto[]>) => {
          state.courses = action.payload;
        },
      )
      // GET COURSES REJECTED
      .addMatcher(getCourses.matchRejected, (state) => {
        state.courses = [];
      });
  },
});

export default courseSlice.reducer;
