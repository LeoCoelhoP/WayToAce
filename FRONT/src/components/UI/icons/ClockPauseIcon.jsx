import React from 'react';
import PropTypes from 'prop-types';

export default function ClockPauseIcon({ className = '', onClick, size = 24 }) {
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
			<path d='M20.942 13.018a9 9 0 1 0 -7.909 7.922' />
			<path d='M12 7v5l2 2' />
			<path d='M17 17v5' />
			<path d='M21 17v5' />
		</svg>
	);
}

ClockPauseIcon.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
