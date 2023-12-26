import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo } from 'react';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startSavingNote } from '../../store/journal/thunks';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {
	const { activeNote, messageSaved, isSaving } = useSelector((state) => state.journal);
	const dispatch = useDispatch();

	const { title, body, onInputChange, date, formState } = useForm(activeNote);

	const dateString = useMemo(() => {
		return new Date(date).toLocaleString('es-ES', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	}, [date]);

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [dispatch, formState]);

	const onSaveNote = () => {
		dispatch(startSavingNote());
	};

	useEffect(
		() => {
			if (messageSaved.length > 0)
				Swal.fire('Nota actualizada', messageSaved, 'success')
		},
		[messageSaved]
	);

	return (
		<Grid
			container
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography fontSize={39} fontWeight='light'>
					{dateString}
				</Typography>
			</Grid>

			<Grid item>
				<Button color='primary' sx={{ padding: 2 }} onClick={onSaveNote} disabled={isSaving}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>

			<Grid container>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					placeholder='Ingrese un título'
					label='Título'
					sx={{ border: 'none', mb: 1 }}
					value={title}
					name='title'
					onChange={onInputChange}
				/>

				<TextField
					type='text'
					variant='filled'
					fullWidth
					multiline
					placeholder='¿Qué sucedio hoy?'
					minRows={5}
					value={body}
					name='body'
					onChange={onInputChange}
				/>
			</Grid>

			{/* Galeria de imagenes */}
			<ImageGallery />
		</Grid>
	);
};
