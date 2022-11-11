import React from "react";

const Input = ({ onChange }) => {
	return (
		<div className="border-solid border border-gray-300 rounded-2xl h-16 w-4/5 md:w-1/2 m-5">
			<input
				className="bg-transparent border-0 w-full h-full p-5 outline-none text-xl text-gray-600"
				onChange={onChange}
				type="search"
				placeholder="Find a repository..."
			/>
		</div>
	);
};

export default Input;
