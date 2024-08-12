import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Banner from '../UI/Banner';
import AppleIcon from '../UI//icons/AppleIcon';
import FacebookIcon from '../UI//icons/FacebookIcon';
import GoogleIcon from '../UI//icons/GoogleIcon';
import ContainerAnimation from '../Layout/ContainerAnimation';

export default function LogIn({ bannerImage, bannerText, condition }) {
	const { t } = useTranslation();

	return (
		<ContainerAnimation
			condition={condition}
			transition={{ duration: 0.4, bounce: 0 }}
			initial={{ y: -1000 }}
			animate={{ y: 0 }}
			exit={{ y: -1000 }}
			className='fixed bg-gradient-to-b dark:from-zinc-400 dark:to-zinc-700 from-zinc-100 to-zinc-200  z-30 flex items-start justify-between w-full p-6 mt-[calc(5.5rem-10px)]  shadow-lg h-full'>
			<div className='w-full'>
				<div className='flex flex-col items-center justify-center w-full gap-4'>
					<Banner imgSrc={bannerImage} bannerText={bannerText} />
					<div className='flex items-center justify-start w-full gap-4 text-lg font-bold text-white rounded-md shadow-md bg-facebookColor-50 h-14'>
						<FacebookIcon size={'2rem'} className={'ml-4 fill-white'} />
						{t('continueWithFacebook')}
					</div>
					<div className='flex items-center justify-start w-full gap-4 text-lg font-bold text-black text-opacity-50 bg-white rounded-md shadow-md h-14'>
						<GoogleIcon size={'2rem'} className={'ml-4'} />
						{t('continueWithGoogle')}
					</div>
					<div className='flex items-center justify-start w-full gap-4 text-lg font-bold text-white bg-black rounded-md shadow-md h-14'>
						<AppleIcon
							size={'2rem'}
							className={'ml-4 stroke-black fill-white'}
						/>
						{t('continueWithApple')}
					</div>
				</div>
			</div>
		</ContainerAnimation>
	);
}

LogIn.propTypes = {
	bannerImage: PropTypes.string,
	bannerText: PropTypes.string,
	condition: PropTypes.bool,
};
