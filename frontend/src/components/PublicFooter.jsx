import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaDribbble, FaInstagram } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';

const navLinkClasses = ({ isActive }) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 ${isActive ? "text-orange-700" : "text-gray-700 hover:text-orange-700"}`;
const PublicFooter = () => {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-12">
                <div className="md:flex md:justify-center">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <NavLink to="/" className={navLinkClasses}>Home</NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink to="/about" className={navLinkClasses}>About</NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink to="/menu" className={navLinkClasses}>Menu</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/tanveera2001" className="hover:underline" target="_blank" rel="noreferrer">Github</a>
                                </li>
                                 <li className="mb-4">
                                    <a href="https://www.linkedin.com/in/md-tanveer-ahmed-23b06023b/" className="hover:underline" target="_blank" rel="noreferrer">LinkedIn</a>
                                </li>
                                 <li className="mb-4">
                                    <a href="https://www.facebook.com/tanveera2001" className="hover:underline" target="_blank" rel="noreferrer">Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">© {new Date().getFullYear()} FamousBurger. All Rights Reserved.</span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 text-gray-500">

                        <a href="https://www.facebook.com/tanveera2001" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">
                            <FaFacebookF className="w-4 h-4" />
                            <span className="sr-only">Facebook page</span>
                        </a>

                        <a href="https://discord.com/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">
                            <SiDiscord className="w-4 h-4" />
                            <span className="sr-only">Discord community</span>
                        </a>

                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">
                            <FaInstagram className="w-4 h-4" />
                            <span className="sr-only">Instagram account</span>
                        </a>

                        <a href="https://github.com/tanveera2001" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">
                            <FaGithub className="w-4 h-4" />
                            <span className="sr-only">GitHub account</span>
                        </a>

                        <a href="https://dribbble.com/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">
                            <FaDribbble className="w-4 h-4" />
                            <span className="sr-only">Dribbble account</span>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PublicFooter;
