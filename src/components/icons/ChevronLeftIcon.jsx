import React from 'react';

export default function chevronRightIcon({ size, onClick, className }) {
	return (
		<svg
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={className}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M11 7l-5 5l5 5' />
			<path d='M17 7l-5 5l5 5' />
		</svg>
	);
}
