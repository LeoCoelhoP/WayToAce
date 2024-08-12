import React from 'react';
import { useTranslation } from 'react-i18next';
import LoadingIcon from './icons/LoadingIcon';

export default function Loading() {
	const { t } = useTranslation();

	return (
		<div
			role='status'
			className='flex flex-col items-center justify-center gap-2 w-svw h-svh bg-gradient-to-b dark:from-zinc-400 dark:to-zinc-700 from-zinc-100 to-zinc-200 font-rubik'>
			<LoadingIcon />
			<span className='text-xl font-bold animate-pulse'>{t('loading')}</span>
		</div>
	);
}
