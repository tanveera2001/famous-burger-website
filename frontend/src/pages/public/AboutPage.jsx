import { Link } from "react-router-dom";

const AboutPage = () => {
	return (
		<div className="max-w-3xl w-full mx-auto mt-20 bg-white border border-[#fcbf49] rounded-lg shadow-lg">
			<div className="p-8">
				<h1 className="text-3xl font-bold mb-6 text-center text-[#d62828]">About Us</h1>

				<p className="text-gray-800 mb-4">
					Welcome to our application! We're passionate about delivering quality experiences, whether you're a
					customer, an admin, or someone just exploring our platform. Our mission is to provide a seamless and
					secure environment for managing your tasks, data, or services efficiently.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">Who We Are</h2>
				<p className="text-gray-700 mb-4">
					We’re a team of developers, designers, and thinkers dedicated to building a modern and user-friendly
					web experience. With a focus on reliability, security, and performance, we aim to serve users of all
					types—from individual users to businesses.
				</p>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">Our Values</h2>
				<ul className="list-disc list-inside text-gray-700 mb-4">
					<li>💡 Innovation with purpose</li>
					<li>🔐 Privacy and security first</li>
					<li>🤝 Transparency and trust</li>
					<li>🎯 Simplicity and usability</li>
				</ul>

				<h2 className="text-xl font-semibold text-[#3a5a40] mb-2">Why Choose Us?</h2>
				<p className="text-gray-700 mb-4">
					We combine intuitive design with modern technologies to provide you with tools that make life easier. Our
					support team is always ready to assist, and we’re continuously improving based on your feedback.
				</p>
			</div>

			
		</div>
	);
};

export default AboutPage;
