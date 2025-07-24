import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
// import { motion } from "framer-motion";

const navItems = [
   { to: "/adminPanel", label: "Home" },
   { to: "create", label: "Add items" },
   { to: "list", label: "List items" },
];

const navLinkClasses = ({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`;

const AdminNavbar = () => {
   const { logout } = useAuthStore();

   const handleLogout = () => {
      logout();
   };
   return (
      <header className="shadow sticky z-50 top-0">
         <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
               <Link to="/" className="flex items-center" aria-label="Home" title="Go to homepage"><img src="/images/logo/famousBurgerLogo.png" alt="Famous Burger Restaurant Logo" className="mr-3 h-10" loading="lazy" /></Link>
               <div className="flex items-center lg:order-2">
                  <Link onClick={handleLogout} className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Log out</Link>
               </div>
               <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                     {navItems.map(({ to, label }) => (<li key={to}><NavLink to={to} end className={navLinkClasses}>{label}</NavLink></li>))}

                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
};
export default AdminNavbar;


