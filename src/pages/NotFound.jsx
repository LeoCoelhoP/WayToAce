import React from 'react';
import NotFoundIcon from '../components/icons/NotFoundIcon';
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<div className='flex flex-col items-center justify-center w-full p-2 rounded-md h-svh bg-zinc-300'>
			<NotFoundIcon size={'10rem'} className={' mx-auto stroke-black'} />
			<div className='text-2xl font-bold text-center '>{t('notFound')}</div>
			<div
				onClick={() => navigate('/', { replace: true })}
				className='flex items-center justify-center gap-2 p-2 m-8 text-xl font-medium rounded-md shadow-md text-start w-fit bg-zinc-50'>
				<ChevronLeftIcon
					arialLabel='Go to Home Page Button'
					className='stroke-black'
					role='button'
					size={'4rem'}
				/>
				{t('notFoundReturnBtn')}
			</div>
		</div>
	);
}
