import React from 'react';
import PropTypes from 'prop-types';

export default function ChevronLeftIcon({
	arialLabel = '',
	className = '',
	onClick,
	role = '',
	size = 24,
}) {
	return (
		<svg
			aria-label={arialLabel}
			className={className}
			fill='none'
			height={size}
			onClick={onClick}
			role={role}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			width={size}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'>
			<path d='M11 7l-5 5l5 5' />
			<path d='M17 7l-5 5l5 5' />
		</svg>
	);
}

ChevronLeftIcon.propTypes = {
	arialLabel: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	role: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
