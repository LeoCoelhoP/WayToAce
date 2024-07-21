import React from 'react';
import PropTypes from 'prop-types';

import ContainerAnimation from '../components/ContainerAnimation';
import PracticeExam from '../components/PracticeExam';

export default function PracticeExamsContainer({ practiceExams }) {
	return (
		<ContainerAnimation
			animate={{ y: 0 }}
			condition={practiceExams?.length > 0}
			className='flex flex-col gap-1 overflow-y-scroll'
			initial={{ y: -50 }}
			exit={{ y: -50 }}
			transition={{ bounce: 0 }}>
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
		</ContainerAnimation>
	);
}

PracticeExamsContainer.propTypes = {
	practiceExams: PropTypes.array,
};
