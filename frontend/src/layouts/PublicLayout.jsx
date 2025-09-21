import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";
import PublicFooter from "../components/PublicFooter";

const PublicLayout = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8">
				<PublicNavbar />
			</div>
			
			<div className="flex-grow w-full">
				<div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8">
					<Outlet />
				</div>
			</div>

			<div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8">
				<PublicFooter />
			</div>
		</div>
	);
};

export default PublicLayout;


