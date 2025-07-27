import { Outlet } from "react-router-dom";

import AdminNavbar from "../components/AdminNavbar";

export default function AdminLayout() {
	return (
		
		<div className="min-h-screen flex flex-col relative overflow-hidden bg-[#fef6f0]">
			<AdminNavbar />
			<Outlet />
		</div>
	);
}



