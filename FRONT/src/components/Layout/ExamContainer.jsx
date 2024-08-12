import React, { useContext, useEffect, useState } from 'react';
import Timer from '../UI/Timer';
import ChevronLeftIcon from '../UI/icons/ChevronLeftIcon';
import ChevronRightIcon from '../UI/icons/ChevronRightIcon';
import { InstitutionsContext } from '../../contexts/InstitutionsContext';
import ListIcon from '../UI/icons/ListIcon';
import ContainerAnimation from '../Layout/ContainerAnimation';
import PropType from 'prop-types';
import { useTranslation } from 'react-i18next';
import QuestionContainer from '../UI/QuestionContainer';

export default function ExamContainer({ continueSavedProgress, examId }) {
	const [exam, setExam] = useState(null);

	const [currentQuestion, setCurrentQuestion] = useState(null);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [isBlurred, setIsBlurred] = useState(false);
	const [answerKey, setAnswerKey] = useState(null);
	const { institutions } = useContext(InstitutionsContext);

	const localStorageAnswerKey = localStorage.getItem(examId);
	const parsedLocalStorageAnswerKey = JSON.parse(localStorageAnswerKey);
	const { t } = useTranslation();
	useEffect(() => {
		if (!institutions) return;
		institutions.map(({ exams }) => {
			const filteredExam = exams.filter((el) => el._id === examId);
			if (filteredExam.length > 0) {
				setCurrentQuestion(filteredExam[0].questions[currentQuestionIndex]);
				setExam(...filteredExam);
			}
		});
	}, [institutions, currentQuestionIndex]);

	// Recover progress
	useEffect(() => {
		if (!exam) return;
		const answerKeyArray = Array.from({ length: exam.questions.length }).map(
			(_, index) => ({
				questionIndex: index,
				answer: null,
			}),
		);
		console.log(continueSavedProgress);
		setAnswerKey(
			!continueSavedProgress
				? answerKeyArray
				: parsedLocalStorageAnswerKey
					? answerKeyArray
					: answerKeyArray,
		);
	}, [exam]);

	// Save progress
	useEffect(() => {
		if (!answerKey || answerKey.length === 0) return;
		localStorage.setItem(examId, JSON.stringify(answerKey));
	}, [answerKey]);

	const [showQuestionList, setShowQuestionList] = useState(false);
	function changeQuestionHandler(question) {
		setCurrentQuestionIndex(question);
		setShowQuestionList(false);
	}

	function handleRightClick() {
		currentQuestionIndex === exam?.questions?.length - 1
			? setCurrentQuestionIndex(0)
			: setCurrentQuestionIndex(currentQuestionIndex + 1);
	}
	function handleLeftClick() {
		currentQuestionIndex === 0
			? setCurrentQuestionIndex(exam?.questions?.length - 1)
			: setCurrentQuestionIndex(currentQuestionIndex - 1);
	}
	if (!exam || !answerKey) return null;
	const isAnswered = answerKey.map((el) => el.answer !== null);
	return (
		<>
			<Timer
				title={exam.examName}
				durationInMinutes={300}
				setIsBlurred={setIsBlurred}
				examId={examId}
				continueSavedProgress={continueSavedProgress}
			/>
			<div
				className={`${isBlurred ? 'blur-sm' : ''} flex flex-col items-center justify-start w-full h-fit overflow-y-auto bg-gradient-to-b dark:from-zinc-200 dark:to-zinc-400`}>
				<QuestionContainer
					answerKey={answerKey}
					currentQuestion={currentQuestion}
					currentQuestionIndex={currentQuestionIndex}
					setAnswerKey={setAnswerKey}
				/>
			</div>
			<ContainerAnimation
				condition={showQuestionList}
				transition={{ duration: 0.4, bounce: 0 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 100 }}
				exit={{ opacity: 0 }}
				className='relative w-full h-fit bg-zinc-800'>
				<div className='flex flex-col flex-wrap items-center justify-center w-full gap-4 p-4 text-center h-fit '>
					<p className='text-2xl text-white'>{t('questionsList')}</p>
					<div className='flex gap-4 p-4 '>
						{answerKey.map((el, index) => {
							return (
								<div
									key={index}
									onClick={() => changeQuestionHandler(index)}
									className={`${answerKey[index].answer !== null ? 'border-4 border-blue-500 bg-blue-200' : ''} bg-zinc-500 hover:animate-pulse  w-12 text-2xl h-12 rounded-md flex items-center justify-center font-bold`}>
									{index + 1}
								</div>
							);
						})}
					</div>
					<div className='p-2 text-2xl font-bold rounded-md bg-zinc-500 hover:animate-pulse'>
						{t('finishTest')}
					</div>
				</div>
			</ContainerAnimation>

			<div className='relative bottom-0 flex gap-2 items-center justify-evenly h-[5.25rem] w-full  z-30 dark:text-white   dark:bg-zinc-800'>
				<ChevronLeftIcon
					size={'2rem'}
					onClick={handleLeftClick}
					className={`${isAnswered[currentQuestionIndex] ? 'animate-pulse' : ''} dark:stroke-white stroke-black `}
				/>
				<span className='flex gap-2'>
					<p className='text-xl'> {t('question')}</p>
					<p className='text-xl'>
						{currentQuestion?.index}/{exam.questions.length}
					</p>
				</span>
				<ChevronRightIcon
					size={'2rem'}
					className={`${isAnswered[currentQuestionIndex] ? 'animate-pulse' : ''} dark:stroke-white stroke-black `}
					onClick={handleRightClick}
				/>
				<ListIcon
					className=' dark:stroke-white stroke-black'
					size={'2rem'}
					onClick={() => setShowQuestionList((state) => !state)}
				/>
			</div>
		</>
	);
}

ExamContainer.propTypes = {
	continueSavedProgress: PropType.bool,
	examId: PropType.string,
};
