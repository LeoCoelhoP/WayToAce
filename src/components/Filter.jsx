import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import ContainerAnimation from './ContainerAnimation';

export default function Filter({ filtering }) {
	const { t } = useTranslation();

	return (
		<ContainerAnimation
			animate={{ y: 0, opacity: 100 }}
			condition={filtering}
			className='static z-0 flex w-full p-2 rounded-md shadow-md bg-zinc-100 dark:bg-zinc-100 h-fit'
			exit={{ y: -40, opacity: 0 }}
			initial={{ y: -40, opacity: 0 }}
			transition={{ bounce: 0 }}>
			<div className='w-full'>
				<span className='font-bold'>{t('filterTitle')}</span>
				<form className='flex w-full gap-2'>
					<div className='w-[100px]'>
						{t('brazil')}
						<div>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='midwest-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 ms-2 dark:text-black'
								htmlFor='midwest-checkbox'>
								{t('midwest')}
							</label>
						</div>
						<div>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='north-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 ms-2 dark:text-black'
								htmlFor='north-checkbox'>
								{t('north')}
							</label>
						</div>
						<div>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='northeast-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 ms-2 dark:text-black'
								htmlFor='northeast-checkbox'>
								{t('northeast')}
							</label>
						</div>
						<div>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='southeast-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 ms-2 dark:text-black'
								htmlFor='southeast-checkbox'>
								{t('southeast')}
							</label>
						</div>
						<div>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='south-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 ms-2 dark:text-black'
								htmlFor='south-checkbox'>
								{t('south')}
							</label>
						</div>
					</div>
					<div>
						{t('worldwide')}
						<div>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='africa-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 ms-2 dark:text-black'
								htmlFor='africa-checkbox'>
								{t('africa')}
							</label>
						</div>
						<div>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='asia-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 ms-2 dark:text-black'
								htmlFor='asia-checkbox'>
								{t('asia')}
							</label>
						</div>
						<div>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='europe-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 ms-2 dark:text-black'
								htmlFor='europe-checkbox'>
								{t('europe')}
							</label>
						</div>
						<div>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='north-america-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 text-start ms-2 dark:text-black'
								htmlFor='north-america-checkbox'>
								{t('northAmerica')}
							</label>
						</div>
						<div>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='south-america-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 ms-2 dark:text-black'
								htmlFor='south-america-checkbox'>
								{t('southAmerica')}
							</label>
						</div>
						<div>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='oceania-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 ms-2 dark:text-black'
								htmlFor='oceania-checkbox'>
								Oceania
							</label>
						</div>
					</div>
					<div className='w-1/3'>
						{t('others')}
						<div className=''>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='populars-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 ms-2 dark:text-gray-black'
								htmlFor='populars-checkbox'>
								{t('populars')}
							</label>
						</div>
						<div>
							<input
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								id='recents-checkbox'
								type='checkbox'
								value=''
							/>
							<label
								className='text-sm font-medium text-gray-900 ms-2 dark:text-black'
								htmlFor='recents-checkbox'>
								{t('recents')}
							</label>
						</div>
					</div>
				</form>
			</div>
		</ContainerAnimation>
	);
}

Filter.propTypes = {
	filtering: PropTypes.bool,
};
