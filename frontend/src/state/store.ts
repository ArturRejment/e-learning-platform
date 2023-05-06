import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';

import { eLearningPlatformApi } from '../apis';
import authReducer from '../components/auth/auth.slice';
import courseReducer from '../components/course/course.slice';

const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined,
) =>
  configureStore({
    reducer: {
      [eLearningPlatformApi.reducerPath]: eLearningPlatformApi.reducer,
      auth: authReducer,
      course: courseReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(eLearningPlatformApi.middleware),
    ...options,
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
