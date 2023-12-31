import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startEmailAndPasswordLogin, startGoogleSignIn } from '../../store/auth/thunks';
import { useMemo } from 'react';
import { statuses } from '../../store/auth/authSlice';


const formData = {
	email: '',
	password: '',
};

export const LoginPage = () => {
	const { status, errorMessage } = useSelector((state) => state.auth);
	const isAuthenticating = useMemo(() => status === statuses.checking, [status]);
	const dispatch = useDispatch();

	const { email, password, onInputChange } = useForm(formData);

	const onSubmit = () => {
		dispatch(startEmailAndPasswordLogin({ email, password }));
	};

	const onGoogleSignIn = () => {
		dispatch(startGoogleSignIn());
	};

	return (
		<AuthLayout title='Login'>
			<form>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Correo'
							type='email'
							placeholder='correo@google.com'
							name='email'
							value={email}
							onChange={onInputChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Contraseña'
							type='password'
							placeholder='Contraseña'
							name='password'
							value={password}
							onChange={onInputChange}
							fullWidth
						/>
					</Grid>
				</Grid>

				<Grid
					container
					spacing={2}
					justifyContent='center'
					sx={{ mb: 2, mt: 1, display: errorMessage ? '' : 'none' }}
				>
					<Grid item xs={12}>
						<Alert severity='error'>{errorMessage}</Alert>
					</Grid>
				</Grid>

				<Grid container spacing={2} justifyContent='center' sx={{ mb: 2, mt: 1 }}>
					<Grid item xs={12} md={6}>
						<Button
							type='submit'
							variant='contained'
							fullWidth
							disabled={isAuthenticating}
							onClick={onSubmit}
						>
							Login
						</Button>
					</Grid>
					<Grid item xs={12} md={6}>
						<Button
							variant='contained'
							fullWidth
							onClick={onGoogleSignIn}
							disabled={isAuthenticating}
						>
							<Google />
							<Typography sx={{ ml: 1 }}>Google</Typography>
						</Button>
					</Grid>
				</Grid>

				<Grid container direction='row' justifyContent='end'>
					<Link component={RouterLink} color='inherit' to='/auth/register'>
						Crear una cuenta
					</Link>
				</Grid>
			</form>
		</AuthLayout>
	);
};
