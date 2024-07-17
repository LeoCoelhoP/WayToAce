import React, { useState } from 'react';

import Banner from '../components/Banner';
import Filter from '../components/Filter';
import NavBar from '../components/NavBar';
import PracticeExamsContainer from '../components/PracticeExamsContainer';

const examNames = [
	{
		name: 'SAT',
		downloads: 1000,
		index: 0,
	},
	{
		name: 'ENEM',
		downloads: 900,
		index: 1,
	},
	{ name: 'USP', downloads: 800, index: 2 },
	{ name: 'UFMG', downloads: 700, index: 3 },
	{ name: 'UFPR', downloads: 600, index: 4 },
	{ name: 'UNILA', downloads: 500, index: 5 },
	{ name: 'FAG', downloads: 400, index: 6 },
	{
		name: 'UNICAMP',
		downloads: 300,
		index: 7,
	},
];

export default function Home() {
	const [searching, setSearching] = useState(false);
	const [filtering, setFiltering] = useState(false);
	const [selected, setSelected] = useState(
		examNames.reduce((prev, current) =>
			prev && prev.downloads > current.downloads ? prev : current,
		),
	);

	return (
		<>
			<Banner />
			<NavBar
				filtering={filtering}
				searching={searching}
				setSearching={setSearching}
				setFiltering={setFiltering}
				selected={selected}
				setSelected={setSelected}
				examNames={examNames}
			/>
			<Filter filtering={filtering} />
			<PracticeExamsContainer practiceExams={[0]} />
		</>
	);
}
