import React, { useState } from 'react';

import MenuIcon from '../../components/icons/MenuIcon';

import Settings from '../../components/Settings';
import MenuOptions from '../../components/MenuOptions';

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);
	const [showSettings, setShowSettings] = useState(false);

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
			/>
			<Settings showSettings={showSettings} />
		</>
	);
}
