import React from 'react';
import Nav from './Nav';

export default function index({ children }) {
	return (
		<div className='flex-col overflow-scroll bg-gradient-to-b dark:from-zinc-400 dark:to-zinc-700 from-zinc-100 to-zinc-200 font-rubik w-svw h-svh'>
			<Nav />
			<div className='flex flex-col w-full gap-4 p-4 mt-14 h-fit'>
				{children}
			</div>
		</div>
	);
}
