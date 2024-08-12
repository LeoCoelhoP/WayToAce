import React from 'react';
import PropTypes from 'prop-types';

export default function SearchIcon({ className = '', onClick, size = 24 }) {
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
			<path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
			<path d='M21 21l-6 -6' />
		</svg>
	);
}

SearchIcon.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
