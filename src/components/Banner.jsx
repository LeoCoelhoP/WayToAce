import React from 'react';

export default function Banner() {
	return (
		<div className='flex h-[180px] w-full '>
			<span className='relative w-fit h-fit'>
				<p className='absolute z-20 w-4/6 p-4 text-lg font-bold text-white dark:text-black '>
					Download Free Practice Exams or Take Them Online to Boost Your Study
					Success Today!
				</p>
				<img
					className='w-full h-[180px] rounded-md shadow-bottom'
					src='banner.jpg'
				/>
			</span>
		</div>
	);
}
