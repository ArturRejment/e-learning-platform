import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { history, routerPaths } from '../../assets';
import { login, register } from '../../services';
import { LoginResponseDto, User } from '../../types';
import { AccessToken } from '../../types/token';
import { logout, tokenRefreshed } from './auth.actions';

type InitialState = {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  error: string;
};

const initialAccessToken = localStorage.getItem('accessToken');
const initialRefreshToken = localStorage.getItem('refreshToken');

const initialState: InitialState = {
  accessToken: initialAccessToken,
  refreshToken: initialRefreshToken,
  isAuthenticated: !!initialAccessToken,
  isLoading: false,
  user: null,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // LOGOUT
      .addCase(logout, (state) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = '';
      })
      // TOKEN REFRESHED
      .addCase(tokenRefreshed, (state, action: PayloadAction<AccessToken>) => {
        const { access } = action.payload;
        localStorage.setItem('accessToken', access);
        state.accessToken = access;
        state.isAuthenticated = true;
        state.error = '';
      })
      // LOGIN PENDING
      .addMatcher(login.matchPending, (state) => {
        state.isLoading = true;
      })
      // LOGIN FULFILLED
      .addMatcher(
        login.matchFulfilled,
        (state, action: PayloadAction<LoginResponseDto>) => {
          const { access, refresh } = action.payload;
          localStorage.setItem('accessToken', access);
          localStorage.setItem('refreshToken', refresh);
          state.accessToken = access;
          state.refreshToken = refresh;
          state.isAuthenticated = true;
          state.isLoading = false;
          state.error = '';

          history.push(routerPaths.home);
        },
      )
      // LOGIN REJECTED
      .addMatcher(login.matchRejected, (state, action) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = action?.error?.message || 'Incorrect credentials';
      })
      // REGISTER PENDING
      .addMatcher(register.matchPending, (state) => {
        state.isLoading = true;
      })
      // REGISTER FULFILLED
      .addMatcher(
        register.matchFulfilled,
        (state, action: PayloadAction<User>) => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          state.user = action.payload;
          state.accessToken = null;
          state.refreshToken = null;
          state.isAuthenticated = false;
          state.isLoading = false;
          state.error = '';

          history.push(routerPaths.login);
        },
      )
      // REGISTER REJECTED
      .addMatcher(register.matchRejected, (state, action) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = action?.error?.message || 'User already exists';
      });
  },
});

export default authSlice.reducer;
