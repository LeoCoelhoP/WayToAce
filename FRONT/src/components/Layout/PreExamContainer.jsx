import React from 'react';
import ChevronLeftIcon from '../UI/icons/ChevronLeftIcon';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import AdBanner from '../UI/AdBanner';

export default function PreExamContainer({
	setContinueSavedProgress,
	setInProgress,
}) {
	const navigate = useNavigate();
	const { t } = useTranslation();

	function navigateBack() {
		navigate('/');
	}
	return (
		<motion.div
			transition={{ duration: 1, bounce: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 100 }}
			className='flex flex-col items-center justify-start w-full h-full rounded-md dark:text-white bg-zinc-400 '>
			<div className='shadow-lg  w-full h-[5.25rem] bg-zinc-800 flex items-center justify-center '>
				<span className='text-2xl font-bold text-center dark:text-zinc-200 font-rubik'>
					Way To Ace
				</span>
				<span
					onClick={navigateBack}
					className='absolute flex items-center flex-grow-0 w-16 ml-4 text-xl font-light start-0 dark:text-zinc-200'>
					<ChevronLeftIcon className='stroke-white shrink-0' size={'2rem'} />
				</span>
			</div>
			<div className='flex flex-col items-center justify-center h-full gap-6'>
				<div className='flex flex-col items-center p-6 gap-6 w-[18.75rem] rounded-md bg-zinc-500'>
					<p className='text-lg text-center'>{t('tookTest')}</p>
					<div className='flex gap-4'>
						<div
							onClick={() => {
								setInProgress(true);
								setContinueSavedProgress(true);
							}}
							className='flex items-center justify-center h-10 p-4 rounded-md shadow-md w-fit bg-zinc-700'>
							{t('continue')}
						</div>
						<div
							onClick={() => {
								setInProgress(true);
								setContinueSavedProgress(false);
							}}
							className='flex items-center justify-center h-10 p-4 rounded-md shadow-md w-fit bg-zinc-700'>
							{t('restart')}
						</div>
					</div>
				</div>
				<AdBanner />
				<AdBanner />
			</div>
		</motion.div>
	);
}

PreExamContainer.propTypes = {
	setContinueSavedProgress: PropTypes.func,
	setInProgress: PropTypes.func,
};
