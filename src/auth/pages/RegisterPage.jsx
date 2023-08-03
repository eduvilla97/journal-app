import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router-dom"

export const RegisterPage = () => {
	return (
		<AuthLayout title="Register">
			<form>
				<Grid container>

					<Grid item xs={12} sx={{ mt: 2}}>
						<TextField label="Nombre completo" type="text" placeholder="Tu Nombre" fullWidth />
					</Grid>

					<Grid item xs={12} sx={{ mt: 2}}>
						<TextField label="Correo" type="email" placeholder="correo@google.com" fullWidth />
					</Grid>
					
					<Grid item xs={12} sx={{ mt: 2}}>
						<TextField label="Contraseña" type="password" placeholder="Contraseña" fullWidth />
					</Grid>

				</Grid>

				<Grid container spacing={2} justifyContent="center" sx={{mb: 2, mt: 1}} >

					<Grid item xs={12}>
						<Button type="submit" variant="contained" fullWidth>
							Crear cuenta
						</Button>
					</Grid>	

				</Grid>

				<Grid container direction="row" justifyContent="end">
					<Typography sx={{mr: 1}}>¿Ya tienes una cuenta?</Typography>
					<Link component={RouterLink} color="inherit" to="/auth/login">
						Ingresar
					</Link>
				</Grid>
			</form>
		</AuthLayout>
	)
}
