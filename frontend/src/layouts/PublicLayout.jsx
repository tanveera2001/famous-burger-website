import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";
// import Footer from "../components/Footer";

export default function PublicLayout() {
	return (
		<div className="min-h-screen flex flex-col">
			<PublicNavbar />
			<Outlet />
			{/* <Footer /> */}
		</div>
	);
}
