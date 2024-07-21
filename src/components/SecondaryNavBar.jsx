import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import ChrevonLefttIcon from './icons/ChevronLeftIcon';
import ChrevonRightIcon from './icons/ChevronRightIcon';
import CloseIcon from './icons/CloseIcon';
import FilterIcon from './icons/FilterIcon';
import FilterIconClose from './icons/FilterIconClose';
import SearchIcon from './icons/SearchIcon';

export default function SecondaryNavBar({
	examNames,
	filtering,
	setFiltering,
	searching,
	setSearching,
	selected,
	setSelected,
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
		<div className='z-20 flex items-center justify-center w-full h-8 gap-2 p-2 overflow-hidden rounded-md shadow-md bg-zinc-50 dark:bg-zinc-100 scroll-m-14'>
			{searching ? (
				<motion.form
					animate={{ y: 0 }}
					className='static w-5/6 h-8 start-0 '
					initial={{ y: -100 }}
					transition={{ bounce: 0 }}>
					<input
						className='w-full h-6 mt-1 placeholder-black bg-transparent border-2 rounded-md dark:border-zinc-400 indent-2'
						placeholder={t('searchPlaceHolder')}
					/>
				</motion.form>
			) : (
				<motion.div
					animate={{ y: 0 }}
					className='z-10 flex items-center w-1/2'
					initial={{ y: -100 }}
					transition={{ bounce: 0 }}>
					<ChrevonLefttIcon
						arialLabel='Carousel Left Button'
						className={'fill-none stroke-black '}
						onClick={() => handleLeftClick()}
						role='button'
						size={'2rem'}
					/>
					{examNames.map((exam) =>
						exam.name === selected.name ? (
							<motion.p
								animate={{ opacity: 1, x: 0 }}
								className={`mx-auto font-bold  text-center dark:text-black text-black`}
								initial={{ opacity: 0, x: -10 }}
								key={exam.name}
								onClick={() => {
									setSelected(exam);
								}}
								transition={{ bounce: 0 }}>
								{selected.name}
							</motion.p>
						) : null,
					)}
					<p className='font-extralight dark:text-black'>
						{selected.index + 1}/{examNames.length}
					</p>
					<ChrevonRightIcon
						arialLabel='Carousel Right Button'
						className={'fill-none stroke-black '}
						onClick={() => handleRightClick()}
						role='button'
						size={'2rem'}
					/>
				</motion.div>
			)}
			<div className='flex flex-shrink-0 gap-2 ml-auto'>
				{filtering ? (
					<FilterIconClose
						className={'dark:stroke-black stroke-black'}
						onClick={() => setFiltering(false)}
						size={'1.5rem'}
					/>
				) : searching ? (
					<FilterIcon
						className={'dark:stroke-black stroke-black'}
						onClick={() => setFiltering(true)}
						size={'1.5rem'}
					/>
				) : null}

				{searching ? (
					<CloseIcon
						className={'dark:stroke-black stroke-black'}
						onClick={() => {
							setFiltering(false);
							setSearching(false);
						}}
						size={'1.5rem'}
					/>
				) : (
					<SearchIcon
						className={'dark:stroke-black stroke-black'}
						onClick={() => setSearching((state) => !state)}
						size={'1.5rem'}
					/>
				)}
			</div>
		</div>
	);
}

SecondaryNavBar.propTypes = {
	examNames: PropTypes.array,
	filtering: PropTypes.bool,
	setFiltering: PropTypes.func,
	searching: PropTypes.bool,
	setSearching: PropTypes.func,
	selected: PropTypes.object,
	setSelected: PropTypes.func,
};
