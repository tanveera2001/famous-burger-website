import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";
import PublicFooter from "../components/PublicFooter";

const PublicLayout = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<PublicNavbar />
			
			<div className="flex-grow mb-10"> {/* Add spacing below Outlet */}
				<Outlet />
			</div>

			<PublicFooter />
		</div>
	);
};

export default PublicLayout;
