import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		// const credentials = GoogleAuthProvider.credentialFromResult( result );
		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			displayName,
			email,
			photo: photoURL,
			uid,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		const email = error.email;
		GoogleAuthProvider.credentialFromError(error);
		return {
			ok: false,
			errorCode,
			errorMessage,
			email,
		};
	}
};

export const registerUserWithEmailAndPassword = async ({ email, password, displayName }) => {
	try {
		const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

		await updateProfile(FirebaseAuth.currentUser, {
			displayName,
		});

		return {
			ok: true,
			displayName,
			email,
			photo: result.user.photoURL,
			uid: result.user.uid,
		};
	} catch (error) {
		return {
			ok: false,
			errorCode: error.code,
			errorMessage: error.message,
		};
	}
};
