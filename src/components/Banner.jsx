import React from 'react';
import PropTypes from 'prop-types';

export default function Banner({ imgSrc, bannerText, className }) {
	return (
		<div
			className={`${className} flex h-[180px] rounded-md w-full z-20 bg-transparent`}>
			<span className='relative w-full h-fit'>
				<p className='absolute z-20 w-4/6 p-4 text-lg font-bold text-white dark:text-black '>
					{bannerText}
				</p>
				<img
					className='w-full h-[180px] rounded-md shadow-bottom '
					src={imgSrc}
				/>
			</span>
		</div>
	);
}

Banner.propTypes = {
	imgSrc: PropTypes.string,
	bannerText: PropTypes.string,
	className: PropTypes.string,
};
