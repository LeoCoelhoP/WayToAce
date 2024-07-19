import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import Banner from './Banner';
import FacebookIcon from './icons/FacebookIcon';
import GoogleIcon from './icons/GoogleIcon';
import AppleIcon from './icons/AppleIcon';

export default function CheckerLogin({ showChecker, user }) {
	return (
		<AnimatePresence>
			{showChecker && (
				<motion.div
					transition={{ duration: 0.4, bounce: 0 }}
					initial={{ y: -1000, opacity: 0 }}
					animate={{ y: 0, opacity: 1000 }}
					exit={{ y: -1000, opacity: 0 }}
					className='fixed bg-gradient-to-b dark:from-zinc-400 dark:to-zinc-700 from-zinc-100 to-zinc-200 font-rubik z-30 flex items-start justify-between w-full p-6 mt-[calc(5.5rem-10px)]  shadow-lg h-full'>
					<div className='flex flex-col items-center justify-center w-full gap-4'>
						<Banner imgSrc={'bannerImage'} bannerText={'bannerText'} />
						<div className='flex items-center justify-start w-full gap-4 text-lg font-bold text-white rounded-md shadow-md bg-facebookColor-50 h-14'>
							<FacebookIcon size={'2rem'} className={'ml-4'} />
							Continue With Facebook
						</div>
						<div className='flex items-center justify-start w-full gap-4 text-lg font-bold text-black text-opacity-50 bg-white rounded-md shadow-md h-14'>
							<GoogleIcon size={'2rem'} className={'ml-4'} />
							Continue With Google
						</div>
						<div className='flex items-center justify-start w-full gap-4 text-lg font-bold text-white bg-black rounded-md shadow-md h-14'>
							<AppleIcon size={'2rem'} className={'ml-4'} />
							Continue With Apple
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
