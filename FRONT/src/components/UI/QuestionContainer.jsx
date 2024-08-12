import React, { useCallback, useEffect, useRef } from 'react';
import propTypes from 'prop-types';

export default function QuestionContainer({
	answerKey,
	currentQuestion,
	currentQuestionIndex = 0,
	setAnswerKey,
}) {
	const questionRef = useRef();

	const {
		complement: {
			image: complementImageSerc = null,
			text: complementText = null,
		} = {},
		alternatives = [],
		question = '',
	} = currentQuestion;

	//Auto Focus Scroll
	useEffect(() => {
		if (!questionRef.current) return;
		questionRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [currentQuestion]);

	const handleAnswerKey = useCallback(
		(answer) => {
			setAnswerKey((state) =>
				state.map((el, index) =>
					index === currentQuestionIndex ? { ...el, answer } : el,
				),
			);
		},
		[currentQuestionIndex, setAnswerKey],
	);

	return (
		<div
			className='w-full h-fit bg-zinc-100 dark:bg-zinc-500'
			ref={questionRef}>
			{complementImageSerc && (
				<img
					src={complementImageSerc}
					className={` w-full shadow-md bg-zinc-50 dark:bg-zinc-400`}
				/>
			)}
			{complementText && (
				<div
					className={` p-2 text-xl font-medium  shadow-md h-fit text-start overflow-contain bg-zinc-50 dark:bg-zinc-400`}>
					{complementText}
				</div>
			)}
			<div className='flex flex-col w-full gap-4 h-fit '>
				<div className='flex flex-col gap-4 p-2 h-fit'>
					{question && <div className='p-2 text-2xl'>{question}</div>}
					{alternatives &&
						alternatives.map((alternative, index) => {
							const alternativeOption = String(Object.keys(alternative));

							return (
								<div
									key={index}
									onClick={() => handleAnswerKey(alternativeOption)}
									className={`${currentQuestionIndex === answerKey[currentQuestionIndex].questionIndex && alternativeOption === answerKey[currentQuestionIndex].answer ? 'border-4 border-blue-500 bg-blue-200' : 'bg-zinc-200'}  flex items-center w-full p-2 text-xl text-black break-words rounded-md shadow-md h-fit `}>
									<h2 className='w-10'>{alternativeOption} - </h2>
									<p className='w-full'> {Object.values(alternative)}</p>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

QuestionContainer.propTypes = {
	answerKey: propTypes.array.isRequired,
	currentQuestion: propTypes.object.isRequired,
	currentQuestionIndex: propTypes.number.isRequired,
	setAnswerKey: propTypes.func.isRequired,
};
