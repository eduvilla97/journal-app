import { createSlice } from '@reduxjs/toolkit';

const statuses = {
	checking: 'checking',
	authenticated: 'authenticated',
	notAuthenticated: 'not-authenticated'
}

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		status: statuses.notAuthenticated,
		uid: null,
		email: null,
		displayName: null,
		photoURL: null,
		errorMessage: null
	},
	reducers: {
		login: (state, action) => {
		},
		logout: (state, action) => {
		},
		checkingCredentials: (state) => {
			state.status = statuses.checking;
		}
	}
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;