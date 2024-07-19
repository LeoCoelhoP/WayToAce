import React from 'react';
import { MdOutlineCameraAlt } from 'react-icons/md';
import { AiTwotonePicture } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import Banner from './Banner';

export default function Checker({ showChecker }) {
	const { t } = useTranslation();
	return (
		<div className='fixed z-30 flex flex-col items-center justify-start w-full h-full gap-8 p-6 shadow-md bg-gradient-to-b dark:from-zinc-400 dark:to-zinc-700 from-zinc-100 to-zinc-200'>
			<Banner imgSrc={'banner4.png'} bannerText={t('checkerBanner')} />
			<div className='flex flex-col items-center w-full gap-4 p-4 rounded-md bg-zinc-100'>
				<p className='text-2xl font-bold text-black w-fit'>
					{t('uploadAnswerKey')}
				</p>

				<div className='w-full flex items-center justify-start gap-2 p-4 rounded-md shadow-md bottom-[11.5rem] bg-zinc-100 dark:bg-zinc-300'>
					<AiTwotonePicture size={'2rem'} />
					<div>
						<p className='text-black'>{t('uploadButton')}</p>
						<p className='text-xs font-light text-black'>PNG or JPEG</p>
					</div>
				</div>
				<div className='flex items-center justify-center w-full gap-2'>
					<div className='w-1/4 h-1 rounded-md bg-zinc-400'></div>
					<p className='text-lg text-zinc-400 w-fit'>{t('or')}</p>
					<div className='w-1/4 h-1 rounded-md bg-zinc-400'></div>
				</div>
				<div className='w-full flex items-center justify-start gap-2 p-4 rounded-md shadow-md bottom-[11.5rem] bg-zinc-100 dark:bg-zinc-300'>
					<MdOutlineCameraAlt size={'2rem'} />
					<div>
						<p className='text-black'>{t('useCamera')}</p>
						<p className='text-xs font-light text-black'>PNG or JPEG</p>
					</div>
				</div>
			</div>

			<div className='flex flex-col items-start justify-start w-full gap-4 p-4 rounded-md h-fit bg-zinc-100'>
				<p className='text-xl font-bold text-start'>{t('lastResults')}</p>
				<table className='w-full px-4'>
					<div className='flex justify-between w-full'>
						<th className='w-1/3 uppercase text-start'>{t('date')}</th>
						<th className='w-1/3 uppercase text-start'>{t('exam')}</th>
						<th className='w-1/3 uppercase text-start'>{t('performance')}</th>
					</div>
					<tr className='flex justify-between gap-2 px-2 text-lg rounded-md bg-zinc-200'>
						<td className='w-1/3 text-start'>19/07/22</td>
						<td className='w-1/3 text-start'>SAT 2023</td>
						<td className='w-1/3 text-start'>80%</td>
					</tr>

					<tr className='flex justify-between gap-2 px-2 text-lg bg-transparent rounded-md'>
						<td className='w-1/3 text-start'>19/07/22</td>
						<td className='w-1/3 text-start'>SAT 2022</td>
						<td className='w-1/3 text-start'>70%</td>
					</tr>

					<tr className='flex justify-between gap-2 px-2 text-lg rounded-md bg-zinc-200'>
						<td className='w-1/3 text-start'>19/07/22</td>
						<td className='w-1/3 text-start'>SAT 2021</td>
						<td className='w-1/3 text-start'>50%</td>
					</tr>
				</table>
			</div>
		</div>
	);
}
