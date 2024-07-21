import React from 'react';
import PropTypes from 'prop-types';

export default function WifiIcon({ className = '', onClick, size = 24 }) {
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
			<path d='M12 18l.01 0' />
			<path d='M9.172 15.172a4 4 0 0 1 5.656 0' />
			<path d='M6.343 12.343a8 8 0 0 1 11.314 0' />
			<path d='M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0' />
		</svg>
	);
}

WifiIcon.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
