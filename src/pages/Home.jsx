import React, { useRef, useState } from 'react';
import Banner from '../components/Banner';
import ChrevonLefttIcon from '../components/icons/ChevronLeftIcon';
import ChrevonRightIcon from '../components/icons/ChevronRightIcon';
import FilterIcon from '../components/icons/FilterIcon';
import PracticeExam from '../components/PracticeExam';
import SearchIcon from '../components/icons/SearchIcon';
import CloseIcon from '../components/icons/CloseIcon';
import { motion } from 'framer-motion';

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

const mostDownloaded = examNames.reduce((prev, current) =>
	prev && prev.downloads > current.downloads ? prev : current,
);

export default function Home() {
	const [selected, setSelected] = useState(mostDownloaded);
	const [searching, setSearching] = useState(false);
	const [filtering, setFiltering] = useState(false);

	function handleLeftClick() {
		const previousExam =
			selected.index === 0
				? examNames[examNames.length - 1]
				: examNames[selected.index - 1];
		setSelected(previousExam);
	}

	function handleRightClick() {
		const previousExam =
			selected.index === examNames.length - 1
				? examNames[0]
				: examNames[Number(selected.index) + 1];
		setSelected(previousExam);
	}

	return (
		<>
			<Banner />
			<div className='flex items-center justify-center w-full h-8 gap-2 overflow-hidden scroll-m-14'>
				{searching ? (
					<motion.form
						transition={{ bounce: 0 }}
						initial={{ x: -100 }}
						animate={{ x: 0 }}
						className='static w-5/6 h-8 shadow-md start-0 '>
						<input
							className='w-full h-8 placeholder-black border-2 rounded-md dark:border-zinc-300 indent-2'
							placeholder='Start by Searching an Exam Name...'
						/>
					</motion.form>
				) : (
					<motion.div
						transition={{ bounce: 0 }}
						initial={{ x: -100 }}
						animate={{ x: 0 }}
						className='flex items-center w-1/2'>
						<ChrevonLefttIcon
							className={'dark:stroke-white'}
							size={'2rem'}
							onClick={() => handleLeftClick()}
						/>
						{examNames.map((exam) =>
							exam.name === selected.name ? (
								<motion.p
									transition={{ bounce: 0 }}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									key={exam.name}
									onClick={() => {
										setSelected(exam);
									}}
									className={`mx-auto font-bold  text-center dark:text-white text-black`}>
									{selected.name}
								</motion.p>
							) : null,
						)}
						<p className='font-extralight dark:text-white'>
							{selected.index + 1}/{examNames.length}
						</p>
						<ChrevonRightIcon
							onClick={() => handleRightClick()}
							className={'dark:stroke-white'}
							size={'2rem'}
						/>
					</motion.div>
				)}
				<div className='flex flex-shrink-0 gap-2 ml-auto'>
					<FilterIcon
						size={'1.5rem'}
						className={'dark:stroke-white stroke-black'}
						color={`${filtering ? 'black' : '#606060'}`}
					/>
					{searching ? (
						<CloseIcon
							size={'1.5rem'}
							className={'dark:stroke-white stroke-black'}
							onClick={() => setSearching((state) => !state)}
						/>
					) : (
						<SearchIcon
							size={'1.5rem'}
							className={'dark:stroke-white stroke-black'}
							onClick={() => setSearching((state) => !state)}
						/>
					)}
				</div>
			</div>
			<motion.div
				transition={{ bounce: 0 }}
				initial={{ x: -50 }}
				animate={{ x: 0 }}
				className='flex flex-col gap-1 overflow-y-scroll'>
				<PracticeExam
					data={{
						examName: 'Scholastic Assessment Test 2023',
						parts: [],
						downloads: 1213,
					}}
				/>
				<PracticeExam
					data={{
						examName: 'Scholastic Assessment Test 2022',
						parts: [],
						downloads: 4313,
					}}
				/>
				<PracticeExam
					data={{
						examName: 'Scholastic Assessment Test 2021',
						parts: [],
						downloads: 5503,
					}}
				/>

				<PracticeExam
					data={{
						examName: 'Scholastic Assessment Test 2020',
						parts: [],
						downloads: 5954,
					}}
				/>

				<PracticeExam
					data={{
						examName: 'Scholastic Assessment Test 2019',
						parts: [],
						downloads: 6450,
					}}
				/>

				<PracticeExam
					data={{
						examName: 'Scholastic Assessment Test 2018',
						parts: [],
						downloads: 10450,
					}}
				/>
			</motion.div>
		</>
	);
}
