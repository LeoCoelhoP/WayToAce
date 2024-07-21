import React from 'react';
import PropTypes from 'prop-types';

export default function DownloadIcon({ className = '', onClick, size = 24 }) {
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
			<path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2' />
			<path d='M7 11l5 5l5 -5' />
			<path d='M12 4l0 12' />
		</svg>
	);
}

DownloadIcon.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
