import { Navigate, Route, Routes } from "react-router-dom";

import SignUpPage from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/LoginPage";
import EmailVerificationPage from "./pages/auth/EmailVerificationPage";
import DashboardPage from "./pages/admin/DashboardPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";

import LoadingSpinner from "./components/LoadingSpinner";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import CreateItem from "./pages/admin/CreateItem";
import ListItem from "./pages/admin/ListItem";
import UpdateItem from "./pages/admin/updateItem";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/public/HomePage";
import MenuPage from "./pages/public/MenuPage";
import PrivacyPolicy from "./pages/public/PrivacyPolicy";
import TermsAndConditions from "./pages/public/TermsAndConditions";
import AboutPage from "./pages/public/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

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
		return <Navigate to='/admin-panel' replace />;
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
					<Route path='/verify-email' element={<RedirectAuthenticatedUser><EmailVerificationPage /></RedirectAuthenticatedUser>} />
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
					<Route path='/' element={<HomePage />} />
					<Route path="/about" element={<AboutPage/>} />
					<Route path="/menu" element={<MenuPage/>} />
					<Route path="/privacy-policy" element={<PrivacyPolicy/>} />
					<Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
					
				</Route>
				
				{/* catch all routes */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
