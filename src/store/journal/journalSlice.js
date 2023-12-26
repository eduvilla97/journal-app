import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
	name: 'journal',
	initialState: {
		isSaving: false,
		messageSaved: '',
		notes: [],
		activeNote: null,
	},
	reducers: {
		addNewEmptyNote: (state, action) => {
			state.notes.push(action.payload);
		},
		setActiveNote: (state, action) => {
			state.activeNote = action.payload;
			state.messageSaved = '';
		},
		savingNewNote: (state) => {
			state.isSaving = true;
			state.messageSaved = '';
		},
		setIsSaving: (state, action) => {
			state.isSaving = action.payload;
		},
		setNotes: (state, action) => {
			state.notes = action.payload;
		},
		updateNote: (state, action) => {
			state.isSaving = false;
			state.notes = state.notes.map((note) =>
				note.id === action.payload.id ? action.payload : note
			);
			state.messageSaved = `${action.payload.title}, actulizada correctamente.`;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, savingNewNote, setIsSaving, setNotes, updateNote } =
	journalSlice.actions;
