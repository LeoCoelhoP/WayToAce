import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Banner() {
	const { t } = useTranslation();
	return (
		<div className='flex h-[180px] w-full z-20'>
			<span className='relative w-fit h-fit'>
				<p className='absolute z-20 w-4/6 p-4 text-lg font-bold text-white dark:text-black '>
					{t('bannerText')}
				</p>
				<img
					className='w-full h-[180px] rounded-md shadow-bottom'
					src='banner.jpg'
				/>
			</span>
		</div>
	);
}
