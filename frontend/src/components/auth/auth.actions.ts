import { createAction } from '@reduxjs/toolkit';

import { AccessToken } from '../../types/token';

const LOGOUT = 'auth/logout';
const TOKEN_REFRESHED = 'auth/tokenRefreshed';

export const logout = createAction<void>(LOGOUT);
export const tokenRefreshed = createAction<AccessToken>(TOKEN_REFRESHED);
