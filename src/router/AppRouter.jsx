import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { JournalRoutes } from '../journal';
import { CheckingAuth } from '../ui';
import { statuses } from '../store/auth/authSlice';
import { useCheckAuth } from '../hooks/useCheckAuth';

export const AppRouter = () => {
	const { status } = useCheckAuth();

	if (status === statuses.checking) {
		return <CheckingAuth />;
	}

	return (
		<Routes>
			{status === statuses.authenticated ? (
				<Route path='/*' element={<JournalRoutes />} />
			) : (
				<Route path='/auth/*' element={<AuthRoutes />} />
			)}

			<Route path='/*' element={<Navigate to='/auth/login' />} />
		</Routes>
	);
};
