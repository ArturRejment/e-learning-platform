import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCourses } from '../../services';
import { Course } from '../../types';

type InitialState = {
  courses: Course[];
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
      .addMatcher(
        getCourses.matchFulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.courses = action.payload;
        },
      )
      .addMatcher(getCourses.matchRejected, (state) => {
        state.courses = [];
      });
  },
});

export default courseSlice.reducer;
