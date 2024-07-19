import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Banner({ imgSrc, bannerText, className }) {
	const { t } = useTranslation();
	return (
		<div className={`${className} flex h-[180px] w-full z-20`}>
			<span className='relative w-fit h-fit'>
				<p className='absolute z-20 w-4/6 p-4 text-lg font-bold text-white dark:text-black '>
					{bannerText}
				</p>
				<img
					className='w-full h-[180px] rounded-md shadow-bottom'
					src={imgSrc}
				/>
			</span>
		</div>
	);
}
