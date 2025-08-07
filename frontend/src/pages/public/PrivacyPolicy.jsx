import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
	return (
		<div className="max-w-3xl w-full mx-auto mt-20 bg-white border border-[#fcbf49] rounded-lg shadow-lg">
			<div className="p-8">
				<h1 className="text-3xl font-bold mb-6 text-center text-[#d62828]">Privacy Policy</h1>

				<p className="text-gray-800 mb-4">
					Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your
					personal information when you use our services.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">1. Information We Collect</h2>
				<p className="text-gray-700 mb-4">
					We may collect your name, email address, login credentials, and other information you provide when you
					register, log in, or interact with our website.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">2. How We Use Information</h2>
				<p className="text-gray-700 mb-4">
					We use the collected information to provide and improve our services, communicate with you, and ensure
					account security.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">3. Data Protection</h2>
				<p className="text-gray-700 mb-4">
					We implement appropriate technical and organizational measures to protect your data against unauthorized
					access, loss, or misuse.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">4. Cookies</h2>
				<p className="text-gray-700 mb-4">
					We may use cookies to enhance your experience. You can control cookie preferences through your browser
					settings.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">5. Third-Party Services</h2>
				<p className="text-gray-700 mb-4">
					We do not share your personal data with third parties except as required by law or to provide essential
					services.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">6. Your Rights</h2>
				<p className="text-gray-700 mb-4">
					You have the right to access, update, or delete your personal information. Contact us if you have any
					privacy concerns.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">7. Changes to This Policy</h2>
				<p className="text-gray-700 mb-4">
					We may update this Privacy Policy from time to time. Any changes will be posted on this page.
				</p>

				<p className="text-gray-600 text-sm mt-6">
					Last updated: August 6, 2025
				</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
