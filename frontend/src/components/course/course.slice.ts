import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateCourseCodes, getCourses } from '../../services';
import { Course } from '../../types';

type InitialState = {
  courses: Course[];
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
        (state, action: PayloadAction<Course[]>) => {
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
