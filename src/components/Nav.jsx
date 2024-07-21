import React, { lazy, useState } from 'react';

import MenuIcon from './icons/MenuIcon';

import MenuOptions from './MenuOptions';
import { useTranslation } from 'react-i18next';

const LogIn = lazy(() => import('./LogIn'));
const Checker = lazy(() => import('./Checker'));
const Settings = lazy(() => import('./Settings'));

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);
	const [showSettings, setShowSettings] = useState(false);
	const [showLogIn, setShowLogIn] = useState(false);
	const [showChecker, setShowChecker] = useState(false);
	const { t } = useTranslation();
	const user = false;
	return (
		<>
			<div
				role='banner'
				className='fixed z-30 flex items-center justify-center w-full h-[5.25rem] bg-white shadow-lg dark:bg-zinc-800'>
				<MenuIcon onClick={() => setShowMenu((state) => !state)} />
				<span className='text-xl font-bold dark:text-zinc-200'>Way To Ace</span>
			</div>

			<MenuOptions
				showMenu={showMenu}
				setShowMenu={setShowMenu}
				setShowSettings={setShowSettings}
				setShowLogIn={setShowLogIn}
				setShowChecker={setShowChecker}
			/>
			<Settings showSettings={showSettings} />
			<LogIn
				condition={!showChecker && showLogIn}
				bannerText={`Launch Your Journey to Success!\n\n Log In Now And Skyrocket Your Scores Today!`}
				bannerImage={'banner2.jpg'}
			/>
			{showChecker && user ? (
				<Checker condition={showChecker && user} />
			) : (
				<LogIn
					condition={showChecker}
					bannerText={t('noUserChecker')}
					bannerImage={'banner4.png'}
				/>
			)}
		</>
	);
}
