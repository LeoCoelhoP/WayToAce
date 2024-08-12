import React from 'react';
import PropTypes from 'prop-types';

export default function QrCodeIcon({ className = '', onClick, size = 24 }) {
	return (
		<svg
			className={className}
			fill='none'
			height={size}
			onClick={onClick}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			width={size}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'>
			<path d='M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
			<path d='M7 17l0 .01' />
			<path d='M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
			<path d='M7 7l0 .01' />
			<path d='M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
			<path d='M17 7l0 .01' />
			<path d='M14 14l3 0' />
			<path d='M20 14l0 .01' />
			<path d='M14 14l0 3' />
			<path d='M14 20l3 0' />
			<path d='M17 17l3 0' />
			<path d='M20 17l0 3' />
		</svg>
	);
}

QrCodeIcon.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
