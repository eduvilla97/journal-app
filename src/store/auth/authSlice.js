import { createSlice } from '@reduxjs/toolkit';

export const statuses = {
	checking: 'checking',
	authenticated: 'authenticated',
	notAuthenticated: 'not-authenticated',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		status: statuses.checking,
		uid: null,
		email: null,
		displayName: null,
		photoURL: null,
		errorMessage: null,
	},
	reducers: {
		login: (state, { payload }) => {
			(state.status = statuses.authenticated),
				(state.uid = payload.uid),
				(state.email = payload.email),
				(state.displayName = payload.displayName),
				(state.photoURL = payload.photoURL),
				(state.errorMessage = null);
		},
		logout: (state, { payload }) => {
			(state.status = statuses.notAuthenticated),
				(state.uid = null),
				(state.email = null),
				(state.displayName = null),
				(state.photoURL = null),
				(state.errorMessage = payload?.errorMessage || null);
		},
		checkingCredentials: (state) => {
			state.status = statuses.checking;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
