import { Outlet } from "react-router-dom";
import FloatingShape from "../components/FloatingShape";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminLayout() {
	return (
		<div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
			{/* Floating Shapes */}
			<FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			<FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />

			{/* Navbar should be at the top */}
			<AdminNavbar />

			{/* Page Content */}
			<div className="flex-grow">
				<Outlet />
			</div>
		</div>
	);
}



