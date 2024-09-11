/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function QuestionContainer({
  answerKey = [],
  currentQuestion = 0,
  currentQuestionIndex,
  setAnswerKey,
}) {
  const questionRef = useRef();

  const {
    complement: {
      image: complementImageSrc = null,
      text: complementText = null,
    } = {},
    alternatives = [],
    question = "",
  } = currentQuestion;

  // Auto Focus Scroll
  useEffect(() => {
    if (!questionRef.current) return;
    questionRef.current.scrollIntoView({ behavior: "smooth" });
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
      className="w-full h-fit bg-zinc-100 dark:bg-zinc-500 justify-self-start m "
      ref={questionRef}
    >
      {complementImageSrc && (
        <img
          alt={complementText}
          src={complementImageSrc}
          className={` w-full shadow-md bg-zinc-50 dark:bg-zinc-400 md:w-1/3 md:mx-auto`}
        />
      )}
      {complementText && (
        <div
          className={` p-2 text-xl font-medium  shadow-md h-fit text-center overflow-contain bg-zinc-50 dark:bg-zinc-400 md:w-1/3 md:mx-auto`}
        >
          {complementText}
        </div>
      )}
      <div className="flex flex-col w-full gap-4 h-fit md:mx-auto md:w-1/3">
        <div className="flex flex-col gap-4 p-2 h-fit">
          {question && <div className="p-2 text-2xl">{question}</div>}
          {alternatives &&
            alternatives.map((alternative, index) => {
              const alternativeOption = String(Object.keys(alternative));

              return (
                <div
                  key={`${index + alternative}`}
                  onClick={() => handleAnswerKey(alternativeOption)}
                  className={`${currentQuestionIndex === answerKey[currentQuestionIndex].questionIndex - 1 && alternativeOption === answerKey[currentQuestionIndex].answer ? "border-4 border-blue-500 bg-blue-200" : "bg-zinc-200"}  flex items-center w-full p-2 text-xl text-black break-words rounded-md shadow-md h-fit `}
                >
                  <h2 className="w-10">{alternativeOption} - </h2>
                  <p className="w-full"> {Object.values(alternative)}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

QuestionContainer.propTypes = {
  answerKey: PropTypes.arrayOf(
    PropTypes.shape({
      questionIndex: PropTypes.number,
      answer: PropTypes.string,
    }),
  ),
  currentQuestion: PropTypes.shape({
    complement: PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    }),
    alternatives: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    question: PropTypes.string.isRequired,
  }),
  currentQuestionIndex: PropTypes.number.isRequired,
  setAnswerKey: PropTypes.func.isRequired,
};
