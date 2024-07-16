import React, { useEffect } from 'react';
import Nav from './Nav';

export default function index({ children }) {
	return (
		<div className='flex-col overflow-scroll dark:bg-gray-700 bg-zinc-100 font-rubik w-svw h-svh'>
			<Nav />
			<div className='flex flex-col w-full gap-4 p-4 mt-14 h-fit'>
				{children}
			</div>
		</div>
	);
}
