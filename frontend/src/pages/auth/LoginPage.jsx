import { useState } from "react";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useAuthStore } from "../../store/authStore";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login, isLoading, error } = useAuthStore();

	const handleLogin = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
	<div className="max-w-md w-full mx-auto mt-20 bg-white border border-[#fcbf49] rounded-lg shadow-lg">
	<div className="p-8">
		<h2 className="text-3xl font-bold mb-6 text-center text-[#d62828]">Login</h2>

		<form onSubmit={handleLogin}>
			<Input
				icon={Mail}
				type="email"
				placeholder="Email Address"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				icon={Lock}
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<div className="flex items-center justify-between mb-6">
				<Link to="/forgot-password" className="text-sm text-[#3a5a40] hover:underline">
					Forgot password?
				</Link>
			</div>

			{error && <p className="text-red-600 font-medium mb-2">{error}</p>}

			<button
				type="submit"
				disabled={isLoading}
				className="w-full py-2 px-4 bg-[#d62828] text-white font-semibold rounded hover:bg-red-700 transition"
			>
				{isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : "Login"}
			</button>
		</form>
	</div>

	<div className="border-t px-8 py-4 text-center">
		<p className="text-sm text-gray-600">
			Don't have an account?{" "}
			<Link to="/signup" className="text-[#3a5a40] hover:underline font-medium">
				Sign up
			</Link>
		</p>
	</div>
</div>


	);
};
export default LoginPage;
