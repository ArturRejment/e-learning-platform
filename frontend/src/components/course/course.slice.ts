import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCourses } from '../../services';
import { CourseDto } from '../../types/dtos';

type InitialState = {
  courses: CourseDto[];
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
        (state, action: PayloadAction<CourseDto[]>) => {
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
