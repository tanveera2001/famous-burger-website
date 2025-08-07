import { useAuthStore } from "../../store/authStore";
import { formatDate } from "../../utils/date";

const DashboardPage = () => {
	const { user } = useAuthStore();

	return (
		<div className="max-w-md w-full mx-auto mt-20 bg-white border border-[#fcbf49] rounded-lg shadow-lg">
			<div className="p-8">
				<h2 className="text-3xl font-bold mb-6 text-center text-[#d62828]">
					Dashboard
				</h2>

				<div className="space-y-6">
					{/* Profile Section */}
					<div className="p-4 bg-[#f1f1f1] rounded border border-[#fcbf49]">
						<h3 className="text-xl font-semibold text-[#3a5a40] mb-3">
							Profile Information
						</h3>
						<p className="text-gray-800">
							<span className="font-medium">Name:</span> {user.name}
						</p>
						<p className="text-gray-800">
							<span className="font-medium">Email:</span> {user.email}
						</p>
					</div>

					{/* Activity Section */}
					<div className="p-4 bg-[#f1f1f1] rounded border border-[#fcbf49]">
						<h3 className="text-xl font-semibold text-[#3a5a40] mb-3">
							Account Activity
						</h3>
						<p className="text-gray-800">
							<span className="font-medium">Joined:</span>{" "}
							{new Date(user.createdAt).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</p>
						<p className="text-gray-800">
							<span className="font-medium">Last Login:</span>{" "}
							{formatDate(user.lastLogin)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
