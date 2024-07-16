import React from 'react';

export default function SearchIcon({ size, onClick, className }) {
	return (
		<svg
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={`
				${className} 
				'icon icon-tabler icons-tabler-outline icon-tabler-adjustments`}>
			{' '}
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
			<path d='M21 21l-6 -6' />
		</svg>
	);
}
