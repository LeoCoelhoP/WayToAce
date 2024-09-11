import React from 'react';
import PropTypes from 'prop-types';

export default function InfoIcon({
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
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' />
			<path d='M12 9h.01' />
			<path d='M11 12h1v4h1' />
		</svg>
	);
}

InfoIcon.propTypes = {
	arialLabel: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	role: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
