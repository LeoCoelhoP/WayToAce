import React from 'react';
import PropTypes from 'prop-types';

export default function PercentageIcon({ className = '', onClick, size = 24 }) {
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
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
			<path d='M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
			<path d='M6 18l12 -12' />
		</svg>
	);
}

PercentageIcon.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
