import React, { useEffect, useState } from 'react';
import MenuIcon from '../../components/icons/MenuIcon';
import CloseIcon from '../../components/icons/CloseIcon';
import QrCodeIcon from '../../components/icons/QrCodeIcon';
import LogInIcon from '../../components/icons/LogInIcon';
import SettingsIcon from '../../components/icons/SettingsIcon';
import { motion, AnimatePresence } from 'framer-motion';
export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);
	const [showSettings, setShowSettings] = useState(false);
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('theme') === 'dark',
	);

	useEffect(() => {
		console.log('opa' + darkMode);
		document.body.classList.remove('light', 'dark');
		document.body.classList.add(darkMode ? 'dark' : 'light');
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
	}, [darkMode]);

	return (
		<>
			<div className='fixed z-30 flex items-center justify-center w-full bg-white shadow-lg dark:bg-zinc-800 h-14'>
				<MenuIcon onClick={() => setShowMenu((state) => !state)} />
				<span className='text-xl font-bold dark:text-zinc-200'>Way To Ace</span>
			</div>
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
								<p className='text-base dark:text-zinc-50'>Checker</p>
							</div>
							<div className='flex flex-col items-center gap-1 text-xl'>
								<LogInIcon
									size={'1.5rem'}
									className={'stroke-black dark:stroke-zinc-50 mr-1'}
								/>
								<p className='text-base dark:text-zinc-50'>Log In</p>
							</div>
							<div className='flex flex-col items-center gap-1 text-xl'>
								<SettingsIcon
									size={'1.5rem'}
									className={'stroke-black  dark:stroke-zinc-50'}
									onClick={() => setShowSettings((state) => !state)}
								/>
								<p className='text-base dark:text-zinc-50'>Settings</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{showSettings && (
					<motion.div
						transition={{ duration: 0.7, bounce: 0 }}
						className='fixed dark:bg-zinc-800 z-40 flex items-center justify-between w-full p-6 mt-[calc(5.5rem-10px)] bg-white shadow-lg h-fit'
						initial={{ y: -256 }}
						animate={{ y: 0 }}
						exit={{ y: -256 }}>
						<form className='flex items-center w-full h-full mt-2 justify-evenly'>
							<label className='inline-flex items-center mb-5 cursor-pointer'>
								<input
									type='checkbox'
									onChange={(e) => setDarkMode(e.target.checked)}
									checked={darkMode}
									className={`sr-only peer ${darkMode ? 'dark' : ''}`}
								/>
								<div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
								<span className='text-sm font-medium text-black ms-3 dark:text-gray-500'>
									Dark Mode
								</span>
							</label>

							<label className='inline-flex items-center mb-5 cursor-pointer'>
								<input type='checkbox' value='' className='sr-only peer' />
								<div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
								<span className='text-sm font-medium text-black ms-3 dark:text-gray-500'>
									Accessibility Mode
								</span>
							</label>
						</form>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
