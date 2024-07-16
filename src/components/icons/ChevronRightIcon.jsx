import React from 'react';

export default function ChrevonRightIcon({ size, onClick, className }) {
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
			className={`icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right ${className}`}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M7 7l5 5l-5 5' />
			<path d='M13 7l5 5l-5 5' />
		</svg>
	);
}
