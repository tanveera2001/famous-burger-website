import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const EmailVerificationPage = () => {
	const [code, setCode] = useState(["", "", "", "", "", ""]);
	const inputRefs = useRef([]);
	const navigate = useNavigate();

	const { error, isLoading, verifyEmail } = useAuthStore();

	const handleChange = (index, value) => {
		const newCode = [...code];

		if (value.length > 1) {
			const pastedCode = value.slice(0, 6).split("");
			for (let i = 0; i < 6; i++) {
				newCode[i] = pastedCode[i] || "";
			}
			setCode(newCode);
			const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
			const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
			inputRefs.current[focusIndex].focus();
		} else {
			newCode[index] = value;
			setCode(newCode);
			if (value && index < 5) {
				inputRefs.current[index + 1].focus();
			}
		}
	};

	const handleKeyDown = (index, e) => {
		if (e.key === "Backspace" && !code[index] && index > 0) {
			inputRefs.current[index - 1].focus();
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const verificationCode = code.join("");
		try {
			await verifyEmail(verificationCode);
			navigate("/");
			toast.success("Email verified successfully");
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (code.every((digit) => digit !== "")) {
			handleSubmit(new Event("submit"));
		}
	}, [code]);

	return (
		<div className="max-w-md w-full mx-auto mt-20 bg-white border border-[#fcbf49] rounded-lg shadow-lg p-8">
			<h2 className="text-3xl font-bold mb-6 text-center text-[#d62828]">
				Verify Your Email
			</h2>
			<p className="text-center text-gray-700 mb-6">
				Enter the 6-digit code sent to your email address.
			</p>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="flex justify-between">
					{code.map((digit, index) => (
						<input
							key={index}
							ref={(el) => (inputRefs.current[index] = el)}
							type="text"
							maxLength="1"
							value={digit}
							onChange={(e) => handleChange(index, e.target.value)}
							onKeyDown={(e) => handleKeyDown(index, e)}
							className="w-12 h-12 text-center text-2xl font-bold bg-[#fef6f0] text-[#3a5a40] border-2 border-[#d62828] rounded-lg focus:border-[#3a5a40] focus:outline-none"
						/>
					))}
				</div>

				{error && <p className="text-red-600 font-semibold mt-2">{error}</p>}

				<button
					type="submit"
					disabled={isLoading || code.some((digit) => !digit)}
					className="w-full bg-[#d62828] text-white font-bold py-3 px-4 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-[#3a5a40] focus:ring-opacity-50 disabled:opacity-50"
				>
					{isLoading ? "Verifying..." : "Verify Email"}
				</button>
			</form>
		</div>
	);
};

export default EmailVerificationPage;
