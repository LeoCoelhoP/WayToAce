import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import CloseIcon from './icons/CloseIcon';
import LogInIcon from './icons/LogInIcon';
import QrCodeIcon from './icons/QrCodeIcon';
import SettingsIcon from './icons/SettingsIcon';
import ContainerAnimation from './ContainerAnimation';

export default function MenuOptions({
	setShowChecker,
	setShowLogIn,
	setShowMenu,
	setShowSettings,
	showMenu,
}) {
	const { t } = useTranslation();

	return (
		<ContainerAnimation
			condition={showMenu}
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
						setShowChecker(false);
						setShowLogIn(false);
						setShowSettings(false);
						setShowMenu((state) => !state);
					}}
				/>
			</div>
			<div className='flex items-center gap-4 mx-auto h-fit'>
				<div className='flex flex-col items-center gap-1 text-xl'>
					<QrCodeIcon
						onClick={() => {
							setShowSettings(false);
							setShowLogIn(false);
							setShowChecker((state) => !state);
						}}
						size={'1.5rem'}
						className={'stroke-black dark:stroke-zinc-50'}
					/>
					<p className='text-base dark:text-zinc-50'>{t('checker')}</p>
				</div>
				<div className='flex flex-col items-center gap-1 text-xl'>
					<LogInIcon
						onClick={() => {
							setShowChecker(false);
							setShowSettings(false);
							setShowLogIn((state) => !state);
						}}
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
		</ContainerAnimation>
	);
}

MenuOptions.propTypes = {
	setShowLogIn: PropTypes.func,
	setShowChecker: PropTypes.func,
	setShowMenu: PropTypes.func,
	setShowSettings: PropTypes.func,
	showMenu: PropTypes.bool,
};
