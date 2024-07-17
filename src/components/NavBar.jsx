import React from 'react';
import ChrevonLefttIcon from '../components/icons/ChevronLeftIcon';
import ChrevonRightIcon from '../components/icons/ChevronRightIcon';
import FilterIcon from '../components/icons/FilterIcon';
import SearchIcon from '../components/icons/SearchIcon';
import CloseIcon from '../components/icons/CloseIcon';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FilterIconClose from './icons/FilterIconClose';

export default function NavBar({
	examNames,
	selected,
	setSelected,
	filtering,
	setFiltering,
	searching,
	setSearching,
}) {
	const { t } = useTranslation();
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
		<div className='z-20 flex items-center justify-center w-full h-8 gap-2 p-2 overflow-hidden rounded-md shadow-md bg-zinc-50 dark:bg-zinc-300 scroll-m-14'>
			{searching ? (
				<motion.form
					transition={{ bounce: 0 }}
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					className='static w-5/6 h-8 start-0 '>
					<input
						className='w-full h-6 mt-1 placeholder-black bg-transparent border-2 rounded-md dark:border-zinc-400 indent-2'
						placeholder={t('searchPlaceHolder')}
					/>
				</motion.form>
			) : (
				<motion.div
					transition={{ bounce: 0 }}
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					className='z-10 flex items-center w-1/2'>
					<ChrevonLefttIcon
						className={'dark:stroke-black '}
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
								className={`mx-auto font-bold  text-center dark:text-black text-black`}>
								{selected.name}
							</motion.p>
						) : null,
					)}
					<p className='font-extralight dark:text-black'>
						{selected.index + 1}/{examNames.length}
					</p>
					<ChrevonRightIcon
						onClick={() => handleRightClick()}
						className={'dark:stroke-black'}
						size={'2rem'}
					/>
				</motion.div>
			)}
			<div className='flex flex-shrink-0 gap-2 ml-auto'>
				{filtering ? (
					<FilterIconClose
						size={'1.5rem'}
						onClick={() => setFiltering(false)}
						className={'dark:stroke-black stroke-black'}
						color={`${filtering ? 'black' : '#606060'}`}
					/>
				) : searching ? (
					<FilterIcon
						size={'1.5rem'}
						onClick={() => setFiltering(true)}
						className={'dark:stroke-black stroke-black'}
						color={`${filtering ? 'black' : '#606060'}`}
					/>
				) : null}

				{searching ? (
					<CloseIcon
						size={'1.5rem'}
						className={'dark:stroke-black stroke-black'}
						onClick={() => {
							setFiltering(false);
							setSearching(false);
						}}
					/>
				) : (
					<SearchIcon
						size={'1.5rem'}
						className={'dark:stroke-black stroke-black'}
						onClick={() => setSearching((state) => !state)}
					/>
				)}
			</div>
		</div>
	);
}
