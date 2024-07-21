import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import DownloadIcon from './icons/DownloadIcon';
import WifiIcon from './icons/WifiIcon';

export default function PracticeExam({ data }) {
	const { t } = useTranslation();
	const { examName } = data;

	return (
		<div className='flex flex-col items-center justify-center w-full p-2 bg-white dark:bg-zinc-100 border-t-[1px] dark:border-zinc-300 border-l-[1px] border-r-[1px] rounded-md shadow-md drop-shadow-sm h-fit'>
			<h1 className='flex items-center mb-auto text-xl font-light text-center '>
				{examName}
			</h1>
			<div className='flex gap-2 items-center justify-between h-[80px] w-full'>
				<span className='flex gap-[5px] items-center h-full w-[105px]  shrink-0'>
					<span className='flex flex-col items-center justify-center w-full h-full gap-2 p-2 text-center break-words rounded-md shadow-md border-t-[1px] border-l-[1px] border-r-[1px] dark:border-zinc-300 dark:border-b-[1px]'>
						<DownloadIcon size={'1.5rem'} className={' stroke-black'} />
						<p className='text-blue-600'>{t('download')}</p>
					</span>
				</span>
				<img
					className='h-[80px] w-1/3 rounded-md bg-white shadow-md'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/SAT_logo_%282017%29.svg/1200px-SAT_logo_%282017%29.svg.png'
				/>
				<span className='flex items-center flex-shrink-0 h-full w-[105px]'>
					<span className='flex flex-col items-center justify-center h-full gap-2 p-2 text-center break-words rounded-md shadow-md border-t-[1px] border-l-[1px] border-r-[1px] dark:border-zinc-300 dark:border-b-[1px]'>
						<WifiIcon size={'1.5rem'} className={' stroke-black'} />
						<p className='text-blue-600'>{t('takeOnline')}</p>
					</span>
				</span>
			</div>
		</div>
	);
}

PracticeExam.propTypes = {
	data: PropTypes.object,
};
