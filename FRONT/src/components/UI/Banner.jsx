import React from 'react';
import PropTypes from 'prop-types';

export default function Banner({ imgSrc, bannerText, className }) {
	return (
		<div
			className={`${className}  flex h-[180px] rounded-md w-full z-20 bg-transparent`}>
			<div className='relative w-full h-fit'>
				<p
					className={`absolute z-20 w-4/6 p-4 text-lg transition-transform duration-300 ease-in hover:scale-90  font-bold text-white dark:text-black`}>
					{bannerText}
				</p>
				<img
					alt={bannerText}
					className='w-full h-[180px] rounded-md shadow-bottom'
					src={imgSrc}
				/>
			</div>
		</div>
	);
}

Banner.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	bannerText: PropTypes.string.isRequired,
	className: PropTypes.string,
};
