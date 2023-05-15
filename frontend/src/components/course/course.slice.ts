import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateCourseCodes, getCourses } from '../../services';
import { CourseDto } from '../../types/dtos';

type InitialState = {
  courses: CourseDto[];
  codes: string[];
};

const initialState: InitialState = {
  courses: [],
  codes: [],
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        getCourses.matchFulfilled,
        (state, action: PayloadAction<CourseDto[]>) => {
          state.courses = action.payload;
        },
      )
      .addMatcher(getCourses.matchRejected, (state) => {
        state.courses = [];
      })
      .addMatcher(
        generateCourseCodes.matchFulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.codes = action.payload;
        },
      );
  },
});

export default courseSlice.reducer;
