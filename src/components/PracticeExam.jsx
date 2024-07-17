import React from 'react';
import WorldIcon from './icons/WorldIcon';
import DownloadIcon from './icons/DownloadIcon';
import { useTranslation } from 'react-i18next';
export default function PracticeExam({ data }) {
	const { examName } = data;

	const { t } = useTranslation();
	return (
		<div className='flex flex-col items-center justify-center w-full p-2 bg-white dark:bg-zinc-300 border-t-[1px] dark:border-zinc-300 border-l-[1px] border-r-[1px] rounded-md shadow-md drop-shadow-sm h-fit'>
			<h1 className='flex items-center mb-auto text-xl font-light text-center '>
				{examName}
			</h1>
			<div className='flex gap-2 items-center justify-between h-[80px] w-full'>
				<span className='flex gap-[5px] items-center h-full w-[105px]  shrink-0'>
					<span className='flex flex-col items-center justify-center w-full h-full gap-2 p-2 text-center break-words rounded-md shadow-md border-t-[1px] border-l-[1px] border-r-[1px] dark:border-zinc-300 dark:border-b-[1px]'>
						<DownloadIcon size={'1.2rem'} className={'flex-shrink-0'} />
						<p className='text-blue-600'>{t('download')}</p>
					</span>
				</span>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/SAT_logo_%282017%29.svg/1200px-SAT_logo_%282017%29.svg.png'
					className='h-[80px] w-1/3 rounded-md bg-white shadow-md'
				/>
				<span className='flex items-center flex-shrink-0 h-full w-[105px]'>
					<span className='flex flex-col items-center justify-center h-full gap-2 p-2 text-center break-words rounded-md shadow-md border-t-[1px] border-l-[1px] border-r-[1px] dark:border-zinc-300 dark:border-b-[1px]'>
						<WorldIcon size={'1.2rem'} />
						<p className='text-blue-600'>{t('takeOnline')}</p>
					</span>
				</span>
			</div>
		</div>
	);
}
