import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { isLoading, forgotPassword } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await forgotPassword(email);
		setIsSubmitted(true);
	};

	return (
		<div className="max-w-md w-full mx-auto mt-20 bg-white border border-[#fcbf49] rounded-lg shadow-lg p-8">
			<h2 className="text-3xl font-bold mb-6 text-center text-[#d62828]">
				Forgot Password
			</h2>

			{!isSubmitted ? (
				<form onSubmit={handleSubmit}>
					<p className="text-gray-700 mb-6 text-center">
						Enter your email address and we'll send you a link to reset your password.
					</p>

					<Input
						icon={Mail}
						type="email"
						placeholder="Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>

					<button
						type="submit"
						disabled={isLoading}
						className="w-full py-3 px-4 bg-[#d62828] text-white font-bold rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-[#3a5a40] focus:ring-opacity-50 disabled:opacity-50 transition duration-200"
					>
						{isLoading ? (
							<Loader className="size-6 animate-spin mx-auto" />
						) : (
							"Send Reset Link"
						)}
					</button>
				</form>
			) : (
				<div className="text-center">
					<div className="w-16 h-16 bg-[#3a5a40] rounded-full flex items-center justify-center mx-auto mb-4">
						<Mail className="h-8 w-8 text-white" />
					</div>
					<p className="text-gray-700 mb-6">
						If an account exists for <strong>{email}</strong>, you will receive a password reset link shortly.
					</p>
				</div>
			)}

			<div className="border-t mt-6 pt-4 flex justify-center">
				<Link to="/login" className="text-sm text-[#3a5a40] hover:underline flex items-center font-medium">
					<ArrowLeft className="h-4 w-4 mr-2" /> Back to Login
				</Link>
			</div>
		</div>
	);
};

export default ForgotPasswordPage;
