import { Navigate, Route, Routes } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

import LoadingSpinner from "./components/LoadingSpinner";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import CreateItem from "./pages/CreateItem";
import ListItem from "./pages/ListItem";
import UpdateItem from "./pages/updateItem";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/login' replace />;
	}

	return children;
};

function App() {
	const { isCheckingAuth, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isCheckingAuth) return <LoadingSpinner />;

	return (
		<div>

			<Routes>
				{/* Auth Layout */}
				<Route element={<AuthLayout />}>
					<Route path='/signup' element={<RedirectAuthenticatedUser><SignUpPage /></RedirectAuthenticatedUser>} />
					<Route path='/login' element={<RedirectAuthenticatedUser><LoginPage /></RedirectAuthenticatedUser>} />
					<Route path='/forgot-password' element={<RedirectAuthenticatedUser><ForgotPasswordPage /></RedirectAuthenticatedUser>} />
					<Route path='/reset-password/:token' element={<RedirectAuthenticatedUser><ResetPasswordPage /></RedirectAuthenticatedUser>} />
					<Route path='/verify-email' element={<EmailVerificationPage />} />
				</Route>

					{/* Admin Layout (Protected) */}
				<Route element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
					<Route path='/admin-panel' element={<DashboardPage />} />
					<Route path="/admin-panel/create-item" element={<CreateItem/>} />
					<Route path="/admin-panel/list-item" element={<ListItem />} />
					<Route path="/admin-panel/update-item/:id" element={<UpdateItem />} />
				</Route>

					{/* Public Layout */}
				<Route element={<PublicLayout />}>
					<Route path='/public-panel' element={<HomePage />} />
					<Route path="/public-panel/menu" element={<MenuPage/>} />
					{/* <Route path="/admin-panel/list-item" element={<ListItem />} /> */}
					
				</Route>
				
				{/* catch all routes */}
				<Route path='*' element={<Navigate to='/admin-panel' replace />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
