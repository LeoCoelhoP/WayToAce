import React from 'react';
import PropTypes from 'prop-types';

import ContainerAnimation from './ContainerAnimation';
import PracticeExam from '../UI/HomeExamCard';

export default function PracticeExamsContainer({
	searching = false,
	practiceExams,
}) {
	const practiceExamsToDisplay = practiceExams?.filter((el) => el.display);
	if (!practiceExamsToDisplay) return;
	return (
		<>
			{!searching || practiceExamsToDisplay.length > 0 ? (
				<ContainerAnimation
					animate={{ y: 0 }}
					condition={!searching || practiceExamsToDisplay.length > 0}
					className='flex flex-col gap-1 h-fit'
					initial={{ y: -50 }}
					exit={{ y: -50 }}
					transition={{ duration: 0.4, bounce: 0 }}>
					{practiceExamsToDisplay.map((el) => (
						<PracticeExam key={el.examName} data={el} />
					))}
				</ContainerAnimation>
			) : (
				<ContainerAnimation
					animate={{ y: 0 }}
					condition={searching}
					className='flex flex-col items-center justify-center w-full p-10 text-center rounded-md bg-zinc-300'
					initial={{ y: -50 }}
					exit={{ y: -50 }}
					transition={{ duration: 0, bounce: 0 }}>
					<p className='text-xl animate-pulse'>
						No Exam Nor Institution Name Found. Please Try Another Query.
					</p>
				</ContainerAnimation>
			)}
		</>
	);
}

PracticeExamsContainer.propTypes = {
	display: PropTypes.bool,
	practiceExams: PropTypes.array,
	searching: PropTypes.bool,
};
