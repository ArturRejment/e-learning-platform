import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

import { logout, tokenRefreshed } from '../components/auth/auth.actions';
import type { RootState } from '../state';
import { AccessTokenDto } from '../types/dtos';

// create baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}`,
  prepareHeaders: (headers, { getState }) => {
    // by default, if we have a token in the store, let's use that for authenticated requests
    const { accessToken } = (getState() as RootState).auth;
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const mutex = new Mutex();

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (!result.error || result.error.status !== 401) return result;

  if (mutex.isLocked()) {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();
    return baseQuery(args, api, extraOptions);
  }

  const release = await mutex.acquire();

  try {
    const refreshToken = localStorage.getItem('refreshToken');

    // try to get a new token
    const refreshResult = await baseQuery(
      {
        url: 'auth/token/refresh',
        method: 'POST',
        body: { refresh: refreshToken },
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      // store the new token
      api.dispatch(tokenRefreshed(refreshResult.data as AccessTokenDto));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      // token not refreshed
      api.dispatch(logout());
    }
  } finally {
    // release must be called once the mutex should be released again
    release();
  }

  return result;
};

const baseQueryWithRetry = retry(baseQueryWithReauth, { maxRetries: 2 });

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
const eLearningPlatformApi = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: 'eLearningPlatformApi',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: baseQueryWithRetry,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ['User'],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
});

export default eLearningPlatformApi;
