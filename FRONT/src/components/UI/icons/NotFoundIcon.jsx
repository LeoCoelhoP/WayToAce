import React from 'react';
import PropTypes from 'prop-types';

export default function NotFoundIcon({ className = '', onClick, size = 24 }) {
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
			<path d='M3 7v4a1 1 0 0 0 1 1h3' />
			<path d='M7 7v10' />
			<path d='M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z' />
			<path d='M17 7v4a1 1 0 0 0 1 1h3' />
			<path d='M21 7v10' />
		</svg>
	);
}

NotFoundIcon.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
