import React from 'react';
import { useTranslation } from 'react-i18next';

import AlertIcon from '../UI/icons/AlertIcon';

export default function NoLastResults() {
	const { t } = useTranslation();

	return (
		<div className='flex flex-col items-center justify-center p-4 text-center rounded-md dark:bg-zinc-300'>
			<AlertIcon className='stroke-black' size={'2.5rem'} />
			<p className='text-xl'>{t('noLastResultsText')}</p>
		</div>
	);
}
