import React from 'react';

export default function MenuIcon({ onClick }) {
	return (
		<div
			onClick={onClick}
			className='absolute flex flex-col gap-1 ml-4 start-0 w-fit h-fit'>
			<div className='w-6 h-1 rounded-md bg-zinc-950 dark:bg-zinc-300'></div>
			<div className='w-6 h-1 rounded-md bg-zinc-950 dark:bg-zinc-300'></div>
			<div className='w-6 h-1 rounded-md bg-zinc-950 dark:bg-zinc-300'></div>
		</div>
	);
}
