import { createAction } from '@reduxjs/toolkit';

import { AccessTokenDto } from '../../types/dtos';

const LOGOUT = 'auth/logout';
const TOKEN_REFRESHED = 'auth/tokenRefreshed';

export const logout = createAction<void>(LOGOUT);
export const tokenRefreshed = createAction<AccessTokenDto>(TOKEN_REFRESHED);
