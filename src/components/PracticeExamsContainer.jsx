import React from 'react';
import PracticeExam from '../components/PracticeExam';

import { AnimatePresence, motion } from 'framer-motion';

export default function PracticeExamsContainer({ practiceExams }) {
	return (
		<AnimatePresence >
			{practiceExams?.length > 0 && (
				<motion.div
					transition={{ bounce: 0 }}
					initial={{ y: -50 }}
					animate={{ y: 0 }}
					exit={{ y: -50 }}
					className='flex flex-col gap-1 overflow-y-scroll'>
					<PracticeExam
						data={{
							examName: 'Scholastic Assessment Test 2023',
							parts: [],
							downloads: 1213,
						}}
					/>
					<PracticeExam
						data={{
							examName: 'Scholastic Assessment Test 2022',
							parts: [],
							downloads: 4313,
						}}
					/>
					<PracticeExam
						data={{
							examName: 'Scholastic Assessment Test 2021',
							parts: [],
							downloads: 5503,
						}}
					/>

					<PracticeExam
						data={{
							examName: 'Scholastic Assessment Test 2020',
							parts: [],
							downloads: 5954,
						}}
					/>

					<PracticeExam
						data={{
							examName: 'Scholastic Assessment Test 2019',
							parts: [],
							downloads: 6450,
						}}
					/>

					<PracticeExam
						data={{
							examName: 'Scholastic Assessment Test 2018',
							parts: [],
							downloads: 10450,
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
