import React from "react";
import { Icon } from "@iconify/react";

const ItemRepo = ({ name, fullName, id, url, onClick }) => (
	<div
		className="w-[500px] bg-white p-8 mx-auto flex flex-col relative rounded-md shadow-sm hover:shadow-md transition-all"
		key={id}
	>
		<Icon
			className="text-rose-400 hover:text-rose-500 transition-all absolute top-2 right-2"
			icon="akar-icons:circle-x-fill"
			width={24}
			height={24}
			onClick={onClick}
		/>
		<h3 className="text-3xl mb-1 text-gray-600 capitalize">{name}</h3>
		<p className="text-base mb-8 text-gray-600/60">{fullName}</p>

		<a
			className="text-gray-600 hover:text-gray-900 transition-all"
			href={url}
			alt={name}
			target="_blank"
		>
			Preview
		</a>
	</div>
);

export default ItemRepo;
