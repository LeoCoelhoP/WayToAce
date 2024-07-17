import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CloseIcon from './icons/CloseIcon';
import LogInIcon from './icons/LogInIcon';
import QrCodeIcon from './icons/QrCodeIcon';
import SettingsIcon from './icons/SettingsIcon';
import { useTranslation } from 'react-i18next';

export default function MenuOptions({
	showMenu,
	setShowMenu,
	setShowSettings,
}) {
	const { t } = useTranslation();
	return (
		<AnimatePresence>
			{showMenu && (
				<motion.div
					transition={{ duration: 0.7, bounce: 0 }}
					className='fixed z-40 flex items-center justify-center w-full p-4 bg-white shadow-lg dark:bg-zinc-800 h-fit'
					initial={{ y: -256 }}
					animate={{ y: 0 }}
					exit={{ y: -256 }}>
					<div className='flex flex-col items-center justify-center gap-1 text-xl'>
						<CloseIcon
							size={'2rem'}
							className={'stroke-black dark:stroke-zinc-50'}
							onClick={() => {
								setShowSettings(false);
								setShowMenu((state) => !state);
							}}
						/>
					</div>
					<div className='flex items-center gap-4 mx-auto h-fit'>
						<div className='flex flex-col items-center gap-1 text-xl'>
							<QrCodeIcon
								size={'1.5rem'}
								className={'stroke-black dark:stroke-zinc-50'}
							/>
							<p className='text-base dark:text-zinc-50'>{t('checker')}</p>
						</div>
						<div className='flex flex-col items-center gap-1 text-xl'>
							<LogInIcon
								size={'1.5rem'}
								className={'stroke-black dark:stroke-zinc-50 mr-1'}
							/>
							<p className='text-base dark:text-zinc-50'>{t('logIn')}</p>
						</div>
						<div className='flex flex-col items-center gap-1 text-xl'>
							<SettingsIcon
								size={'1.5rem'}
								className={'stroke-black  dark:stroke-zinc-50'}
								onClick={() => setShowSettings((state) => !state)}
							/>
							<p className='text-base dark:text-zinc-50'>{t('settings')}</p>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
