import React, { useState } from 'react';
import PreExamContainer from '../components/Layout/PreExamContainer';
import ExamContainer from '../components/Layout/ExamContainer';
import { useParams } from 'react-router-dom';

export default function Exam() {
	const [continueSavedProgress, setContinueSavedProgress] = useState(false);
	const [inProgress, setInProgress] = useState(false);

	const { examId } = useParams();

	return (
		<div className='flex flex-col items-center justify-between font-rubik dark:bg-zinc-500 w-svw h-svh'>
			{inProgress && (
				<ExamContainer
					setInProgress={setInProgress}
					examId={examId}
					continueSavedProgress={continueSavedProgress}
				/>
			)}
			{!continueSavedProgress && !inProgress && (
				<PreExamContainer
					setInProgress={setInProgress}
					setContinueSavedProgress={setContinueSavedProgress}
				/>
			)}
		</div>
	);
}
