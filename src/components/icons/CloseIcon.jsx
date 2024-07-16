import React from 'react';

export default function CloseIcon({ onClick, size, className }) {
	console.log(className);
	return (
		<svg
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			stroke=''
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={`${className}`}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M18 6l-12 12' />
			<path d='M6 6l12 12' />
		</svg>
	);
}
