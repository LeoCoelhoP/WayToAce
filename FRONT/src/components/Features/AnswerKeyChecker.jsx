import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Banner from '../UI/Banner';
import CameraIcon from '../UI/icons/CameraIcon';
import PhotoIcon from '../UI/icons/PhotoIcon';
import ContainerAnimation from '../Layout/ContainerAnimation';

export default function AnswerKeyChecker({ condition }) {
	const { t } = useTranslation();

	return (
		<ContainerAnimation
			condition={condition}
			transition={{ duration: 0.4, bounce: 0 }}
			initial={{ y: -1000 }}
			animate={{ y: 0 }}
			exit={{ y: -1000 }}
			className='fixed bg-transparent  z-30 flex items-center justify-start flex-col w-full mt-[calc(5.5rem-10px)] shadow-md h-full'>
			<div className='fixed z-30 flex flex-col items-center justify-start w-full h-full gap-8 p-6 shadow-md bg-gradient-to-b dark:from-zinc-400 dark:to-zinc-700 from-zinc-100 to-zinc-300'>
				<Banner imgSrc={'banner4.png'} bannerText={t('checkerBanner')} />

				<div className='flex flex-col items-center w-full gap-4 p-4 rounded-md bg-zinc-100 dark:bg-zinc-700'>
					<p className='text-2xl font-bold text-black dark:text-white w-fit'>
						{t('uploadAnswerKey')}
					</p>
					<div
						aria-label={t('uploadButton')}
						className='w-full flex items-center justify-start gap-2 p-4 rounded-md shadow-md bottom-[11.5rem] bg-zinc-100 dark:bg-zinc-300'
						role='button'>
						<PhotoIcon size={'2rem'} className='stroke-black' />
						<div>
							<p className='text-black'>{t('uploadButton')}</p>
							<p className='text-xs font-light text-black'>
								PNG {t('or')} JPEG
							</p>
						</div>
					</div>
					<div className='flex items-center justify-center w-full gap-2'>
						<div className='w-1/4 h-1 rounded-md bg-zinc-50'></div>
						<p className='text-lg text-zinc-50 w-fit'>{t('or')}</p>
						<div className='w-1/4 h-1 rounded-md bg-zinc-50'></div>
					</div>
					<div
						aria-label={t('useCamera')}
						className='w-full flex items-center justify-start gap-2 p-4 rounded-md shadow-md bottom-[11.5rem] bg-zinc-100 dark:bg-zinc-300'
						role='button'>
						<CameraIcon size={'2rem'} className='stroke-black' />
						<div>
							<p className='text-black'>{t('useCamera')}</p>
							<p className='text-xs font-light text-black'>
								PNG {t('or')} JPEG
							</p>
						</div>
					</div>
				</div>
			</div>
		</ContainerAnimation>
	);
}

AnswerKeyChecker.propTypes = {
	condition: PropTypes.bool,
};
