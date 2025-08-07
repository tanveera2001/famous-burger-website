import { Link } from "react-router-dom";

const TermsAndConditions = () => {
	return (
		<div className="max-w-3xl w-full mx-auto mt-20 bg-white border border-[#fcbf49] rounded-lg shadow-lg">
			<div className="p-8">
				<h1 className="text-3xl font-bold mb-6 text-center text-[#d62828]">Terms & Conditions</h1>

				<p className="text-gray-800 mb-4">
					Please read these Terms and Conditions ("Terms") carefully before using our services. By accessing or
					using our website, you agree to be bound by these Terms.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">1. Acceptance of Terms</h2>
				<p className="text-gray-700 mb-4">
					By using our services, you agree to comply with and be legally bound by the terms set forth in this
					document.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">2. Use of the Service</h2>
				<p className="text-gray-700 mb-4">
					You may use the service only in compliance with these Terms and all applicable local, state, national,
					and international laws.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">3. Account Responsibilities</h2>
				<p className="text-gray-700 mb-4">
					You are responsible for maintaining the confidentiality of your account and for all activities that
					occur under your account.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">4. Intellectual Property</h2>
				<p className="text-gray-700 mb-4">
					All content, trademarks, and data on this website, including but not limited to software, databases,
					text, graphics, icons, and hyperlinks are the property of or licensed to us.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">5. Termination</h2>
				<p className="text-gray-700 mb-4">
					We reserve the right to suspend or terminate your access to the service at any time, without prior
					notice or liability, for any reason.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">6. Changes to Terms</h2>
				<p className="text-gray-700 mb-4">
					We may update these Terms from time to time. Continued use of the service after changes indicates your
					acceptance of the new terms.
				</p>

				<p className="text-gray-600 text-sm mt-6">
					Last updated: August 6, 2025
				</p>
			</div>
		</div>
	);
};

export default TermsAndConditions;
