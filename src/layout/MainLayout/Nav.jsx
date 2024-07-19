import React, { useState } from 'react';

import MenuIcon from '../../components/icons/MenuIcon';

import Settings from '../../components/Settings';
import MenuOptions from '../../components/MenuOptions';
import LogIn from '../../components/LogIn';
import Checker from '../../components/Checker';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import Banner from '../../components/Banner';
import FacebookIcon from '../../components/icons/FacebookIcon';
import GoogleIcon from '../../components/icons/GoogleIcon';
import AppleIcon from '../../components/icons/AppleIcon';

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);
	const [showSettings, setShowSettings] = useState(false);
	const [showLogIn, setShowLogIn] = useState(false);
	const [showChecker, setShowChecker] = useState(false);
	const { t } = useTranslation();
	const user = false;
	return (
		<>
			<div className='fixed z-30 flex items-center justify-center w-full bg-white shadow-lg dark:bg-zinc-800 h-14'>
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

			<AnimatePresence>
				{!showChecker && showLogIn && (
					<motion.div
						transition={{ duration: 0.4, bounce: 0 }}
						initial={{ y: -1000 }}
						animate={{ y: 0 }}
						exit={{ y: -1000 }}
						className='fixed bg-gradient-to-b dark:from-zinc-400 dark:to-zinc-700 from-zinc-100 to-zinc-200  z-30 flex items-start justify-between w-full p-6 mt-[calc(5.5rem-10px)]  shadow-lg h-full'>
						<LogIn
							bannerText={`Launch Your Journey to Success!\n\n Log In Now And Skyrocket Your Scores Today!`}
							bannerImage={'banner2.jpg'}
						/>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{showChecker && user && (
					<motion.div
						transition={{ duration: 0.4, bounce: 0 }}
						initial={{ y: -1000 }}
						animate={{ y: 0 }}
						exit={{ y: -1000 }}
						className='fixed bg-transparent  z-30 flex items-center justify-start flex-col w-full mt-[calc(5.5rem-10px)] shadow-md h-full'>
						<Checker />
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{showChecker && !user && (
					<motion.div
						transition={{ duration: 0.4, bounce: 0 }}
						initial={{ y: -1000 }}
						animate={{ y: 0 }}
						exit={{ y: -1000 }}
						className='fixed bg-gradient-to-b dark:from-zinc-400 dark:to-zinc-700 from-zinc-100 to-zinc-200  z-30 flex items-start justify-between w-full p-6 mt-[calc(5.5rem-10px)]  shadow-lg h-full'>
						<LogIn
							bannerText={t('noUserChecker')}
							bannerImage={'banner1.png'}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
