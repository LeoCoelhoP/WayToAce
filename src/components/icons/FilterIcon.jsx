import React from 'react';
import PropTypes from 'prop-types';

export default function FilterIcon({ className = '', onClick, size = 24 }) {
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
			<path d='M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
			<path d='M6 4v4' />
			<path d='M6 12v8' />
			<path d='M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
			<path d='M12 4v10' />
			<path d='M12 18v2' />
			<path d='M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
			<path d='M18 4v1' />
			<path d='M18 9v11' />
		</svg>
	);
}

FilterIcon.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
