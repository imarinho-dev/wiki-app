import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import Input from "./components/Input/Input.component";
import ItemRepo from "./components/ItemRepo/ItemRepo.component";
import { api } from "./services/api";

function App() {
	const [filter, setFilter] = useState([]);

	const [repos, setRepos] = useState([]);
	useEffect(() => {
		return setFilter(() => repos);
	}, [repos]);

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		try {
			const response = await api.get(`/users/imarinho-dev/repos`);
			setRepos(() => response.data);
		} catch (error) {
			console.log(error);
		}
	}

	const handleRemove = (id) => {
		const newRepos = filter.filter((item) => item.id !== id);
		setFilter(newRepos);
	};

	return (
		<div className="w-full  flex flex-col items-center justify-start mt-5">
			<Icon
				className="text-gray-600"
				icon="mdi:github"
				width={72}
				height={72}
				alt="Github logo"
			/>
			<Input
				onChange={(event) => {
					const filteredRepos = repos.filter((repo) => {
						return repo.name.includes(event.target.value.toLocaleLowerCase());
					});
					setFilter(() => filteredRepos);
				}}
			/>
			<div className="w-4/5 m-5 grid grid-cols-1 md:grid-cols-2 gap-8 ">
				{filter.map((filter) => (
					<ItemRepo
						key={filter.id}
						name={filter.name}
						fullName={filter.full_name}
						url={filter.html_url}
						onClick={() => handleRemove(filter.id)}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
