import { registerUserWithEmailAndPassword, signInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
	};
};

export const startGoogleSignIn = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		const result = await signInWithGoogle();
		if (!result.ok) {
			return dispatch(logout(result.errorMessage));
		}

		dispatch(login(result));
	};
};

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		const result = await registerUserWithEmailAndPassword({ email, password, displayName });
		if (!result.ok) {
			return dispatch(logout({ errorMessage: result.errorMessage }));
		}

		dispatch(login(result));
	};
};
