import Input from "../../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { signup, error, isLoading } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			await signup(email, password, name);
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="max-w-md w-full mx-auto mt-20 bg-white border border-[#fcbf49] rounded-lg shadow-lg">
			<div className="p-8">
				<h2 className="text-3xl font-bold mb-6 text-center text-[#d62828]">Create Account</h2>

				<form onSubmit={handleSignUp}>
					<Input
						icon={User}
						type="text"
						placeholder="Full Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
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

					{error && <p className="text-red-600 font-medium mt-2">{error}</p>}

					<button
						type="submit"
						disabled={isLoading}
						className="mt-5 w-full py-2 px-4 bg-[#d62828] text-white font-semibold rounded hover:bg-red-700 transition"
					>
						{isLoading ? <Loader className="w-5 h-5 animate-spin mx-auto" /> : "Sign Up"}
					</button>
				</form>
			</div>

			<div className="border-t px-8 py-4 text-center">
				<p className="text-sm text-gray-600">
					Already have an account?{" "}
					<Link to="/login" className="text-[#3a5a40] hover:underline font-medium">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUpPage;
