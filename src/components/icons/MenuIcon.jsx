import React from 'react';
import PropTypes from 'prop-types';

export default function MenuIcon({ onClick }) {
	return (
		<div
			role='button'
			aria-label='Menu Button'
			onClick={onClick}
			className='absolute flex flex-col gap-1 ml-4 start-0 w-fit h-fit'>
			<div className='w-6 h-1 rounded-md bg-zinc-950 dark:bg-zinc-300'></div>
			<div className='w-6 h-1 rounded-md bg-zinc-950 dark:bg-zinc-300'></div>
			<div className='w-6 h-1 rounded-md bg-zinc-950 dark:bg-zinc-300'></div>
		</div>
	);
}

MenuIcon.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
