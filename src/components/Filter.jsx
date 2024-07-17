import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Filter({ filtering }) {
	const { t } = useTranslation();
	return (
		<AnimatePresence>
			{filtering && (
				<motion.div
					transition={{ bounce: 0 }}
					initial={{ y: -40, opacity: 0 }}
					animate={{ y: 0, opacity: 100 }}
					exit={{ y: -40, opacity: 0 }}
					className='static z-0 flex w-full p-2 rounded-md shadow-md bg-zinc-100 dark:bg-zinc-300 h-fit'>
					<div className='w-full'>
						<span className='font-bold'>{t('filterTitle')}</span>
						<form className='flex w-full gap-2'>
							<div className='w-[100px]'>
								{t('brazil')}
								<div>
									<input
										id='midwest-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='midwest-checkbox'
										className='text-sm font-medium text-gray-900 ms-2 dark:text-black'>
										{t('midwest')}
									</label>
								</div>
								<div>
									<input
										id='north-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='north-checkbox'
										className='text-sm font-medium text-gray-900 ms-2 dark:text-black'>
										{t('north')}
									</label>
								</div>
								<div>
									<input
										id='northeast-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='northeast-checkbox'
										className='text-sm font-medium text-gray-900 ms-2 dark:text-black'>
										{t('northeast')}
									</label>
								</div>
								<div>
									<input
										id='southeast-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='southeast-checkbox'
										className='text-sm font-medium text-gray-900 ms-2 dark:text-black'>
										{t('southeast')}
									</label>
								</div>
								<div>
									<input
										id='south-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='south-checkbox'
										className='text-sm font-medium text-gray-900 ms-2 dark:text-black'>
										{t('south')}
									</label>
								</div>
							</div>
							<div>
								{t('worldwide')}
								<div>
									<input
										id='africa-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='africa-checkbox'
										className='text-sm font-medium text-gray-900 ms-2 dark:text-black'>
										{t('africa')}
									</label>
								</div>
								<div>
									<input
										id='asia-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='asia-checkbox'
										className='text-sm font-medium text-gray-900 ms-2 dark:text-black'>
										{t('asia')}
									</label>
								</div>
								<div>
									<input
										id='europe-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='europe-checkbox'
										className='text-sm font-medium text-gray-900 ms-2 dark:text-black'>
										{t('europe')}
									</label>
								</div>
								<div>
									<input
										id='north-america-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='north-america-checkbox'
										className='text-sm font-medium text-gray-900 text-start ms-2 dark:text-black'>
										{t('northAmerica')}
									</label>
								</div>
								<div>
									<input
										id='south-america-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='south-america-checkbox'
										className='text-sm font-medium text-gray-900 ms-2 dark:text-black'>
										{t('southAmerica')}
									</label>
								</div>
								<div>
									<input
										id='oceania-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='oceania-checkbox'
										className='text-sm font-medium text-gray-900 ms-2 dark:text-black'>
										Oceania
									</label>
								</div>
							</div>
							<div className='w-1/3'>
								{t('others')}
								<div className=''>
									<input
										id='populars-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='populars-checkbox'
										className='text-sm font-medium text-gray-900 ms-2 dark:text-gray-black'>
										{t('populars')}
									</label>
								</div>
								<div>
									<input
										id='recents-checkbox'
										type='checkbox'
										value=''
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='recents-checkbox'
										className='text-sm font-medium text-gray-900 ms-2 dark:text-black'>
										{t('recents')}
									</label>
								</div>
							</div>
						</form>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
