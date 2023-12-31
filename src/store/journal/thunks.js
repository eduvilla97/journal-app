import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { FirebaseDB } from '../../firebase/config';
import {
	savingNewNote,
	addNewEmptyNote,
	setActiveNote,
	setIsSaving,
	setNotes,
	updateNote,
} from './journalSlice';
import { loadNotes } from '../../helpers';

export const startNewNote = () => {
	return async (dispatch, getState) => {
		dispatch(savingNewNote());

		const { uid } = getState().auth;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
			imageUrls: [],
		};

		try {
			const userJournalRef = collection(FirebaseDB, uid, 'journal', 'notes');

			// Añadir el documento a la colección
			const newDocRef = await addDoc(userJournalRef, newNote);
			newNote.id = newDocRef.id;

			dispatch(addNewEmptyNote(newNote));
			dispatch(setActiveNote(newNote));
			dispatch(setIsSaving(false));
		} catch (error) {
			dispatch(setIsSaving(false));
			console.error('Error adding document: ', error);
		}
	};
};

export const startLoadingNotes = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		if (!uid) throw new Error('El UID del usuario no existe.');
		dispatch(setNotes(await loadNotes(uid)));
	};
};

export const startSavingNote = () => {
	return async (dispatch, getState) => {
		dispatch(savingNewNote());

		const { uid } = getState().auth;
		const { activeNote: note } = getState().journal;

		const noteToFireStore = { ...note };
		delete noteToFireStore.id;

		const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
		await setDoc(docRef, noteToFireStore, { merge: true });

		dispatch(updateNote(note));
	};
};
