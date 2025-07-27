const Input = ({ icon: Icon, ...props }) => {
	return (
		<div className="relative mb-6">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<Icon className="size-5 text-gray-500" />
			</div>
		<input
	{...props}
	className="w-full pl-10 pr-3 py-2 bg-white text-gray-800 placeholder-gray-400 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3a5a40] focus:border-[#3a5a40] transition"
/>

		</div>
	);
};

export default Input;
