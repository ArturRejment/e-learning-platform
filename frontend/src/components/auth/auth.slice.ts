import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { history, ROUTER_PATH } from '../../assets';
import { login, register } from '../../services';
import { AccessTokenDto, LoginResponseDto, UserDto } from '../../types/dtos';
import { logout, tokenRefreshed } from './auth.actions';

type InitialState = {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserDto | null;
};

const initialAccessToken = localStorage.getItem('accessToken');
const initialRefreshToken = localStorage.getItem('refreshToken');

const initialState: InitialState = {
  accessToken: initialAccessToken,
  refreshToken: initialRefreshToken,
  isAuthenticated: !!initialAccessToken,
  isLoading: false,
  user: null,
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
        state.isAuthenticated = false;
        state.isLoading = false;
      })
      // TOKEN REFRESHED
      .addCase(
        tokenRefreshed,
        (state, action: PayloadAction<AccessTokenDto>) => {
          const { access } = action.payload;
          localStorage.setItem('accessToken', access);
          state.accessToken = access;
          state.isAuthenticated = true;
        },
      )
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

          history.push(ROUTER_PATH.HOME);
        },
      )
      // LOGIN REJECTED
      .addMatcher(login.matchRejected, (state) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        state.accessToken = null;
        state.refreshToken = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      })
      // REGISTER PENDING
      .addMatcher(register.matchPending, (state) => {
        state.isLoading = true;
      })
      // REGISTER FULFILLED
      .addMatcher(register.matchFulfilled, (state) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        state.accessToken = null;
        state.refreshToken = null;
        state.isAuthenticated = false;
        state.isLoading = false;

        history.push(ROUTER_PATH.LOGIN);
      })
      // REGISTER REJECTED
      .addMatcher(register.matchRejected, (state) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        state.accessToken = null;
        state.refreshToken = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
