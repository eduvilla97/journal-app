import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks';

const initialFormData = {
	displayName: '',
	email: '',
	password: '',
};

const formValidations = {
	email: [(value) => value.includes('@'), 'El correo no es válido'],
	password: [(value) => value.length > 5, 'La contraseña debe tener al menos 6 caracteres'],
	displayName: [(value) => value.length > 0, 'El nombre es requerido'],
};

export const RegisterPage = () => {
	const {
		displayName,
		email,
		password,
		onInputChange,
		formState,
		isFormValid,
		emailValid,
		displayNameValid,
		passwordValid,
	} = useForm(initialFormData, formValidations);

	const dispatch = useDispatch();
	const [formSubmitted, setFormSubmitted] = useState(false);

	const onSubmit = (e) => {
		if(! isFormValid) return;
		setFormSubmitted(true);
		e.preventDefault();
		dispatch(startCreatingUserWithEmailAndPassword(formState));
	};

	return (
		<AuthLayout title='Register'>
			<form onSubmit={onSubmit}>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Nombre completo'
							type='text'
							placeholder='Tu Nombre'
							fullWidth
							name='displayName'
							value={displayName}
							onChange={onInputChange}
							error={!!displayNameValid && formSubmitted}
							helperText={!!displayNameValid && formSubmitted && 'El nombre es requerido'}
						/>
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Correo'
							type='email'
							placeholder='correo@google.com'
							fullWidth
							name='email'
							value={email}
							onChange={onInputChange}
							error={!!emailValid && formSubmitted}
							helperText={!!emailValid && formSubmitted && 'El correo es requerido'}
						/>
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Contraseña'
							type='password'
							placeholder='Contraseña'
							fullWidth
							name='password'
							value={password}
							onChange={onInputChange}
							error={!!passwordValid && formSubmitted}
							helperText={!!passwordValid && formSubmitted && 'La contraseña es requerida'}
						/>
					</Grid>
				</Grid>

				<Grid container spacing={2} justifyContent='center' sx={{ mb: 2, mt: 1 }}>
					<Grid item xs={12}>
						<Button type='submit' variant='contained' fullWidth>
							Crear cuenta
						</Button>
					</Grid>
				</Grid>

				<Grid container direction='row' justifyContent='end'>
					<Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
					<Link component={RouterLink} color='inherit' to='/auth/login'>
						Ingresar
					</Link>
				</Grid>
			</form>
		</AuthLayout>
	);
};
