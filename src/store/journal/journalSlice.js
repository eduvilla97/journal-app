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
		},
		savingNewNote: (state) => {
			state.isSaving = true;
		},
		setIsSaving: (state, action) => {
			state.isSaving = action.payload;
		},
		setNotes: (state, action) => {
			state.notes = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, savingNewNote, setIsSaving, setNotes } =
	journalSlice.actions;
