import React from 'react';
import PropTypes from 'prop-types';

export default function UserIcon({ className = '', onClick, size = 24 }) {
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
			<path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
			<path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
		</svg>
	);
}

UserIcon.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
