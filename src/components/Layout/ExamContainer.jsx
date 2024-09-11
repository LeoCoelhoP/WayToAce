/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropType from "prop-types";
import { useTranslation } from "react-i18next";

import { InstitutionsContext } from "../../contexts/InstitutionsContext";
import { UserContext } from "../../contexts/UserContext";
import ContainerAnimation from "./ContainerAnimation";
import QuestionContainer from "./QuestionContainer";
import { finishExam } from "../../services/user";
import Timer from "../UI/Timer";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import ListIcon from "../icons/ListIcon";

export default function ExamContainer({
  continueSavedProgress = false,
  examId = "",
}) {
  const [exam, setExam] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);
  const [answerKey, setAnswerKey] = useState(null);
  const { institutions } = useContext(InstitutionsContext);
  const [userTimer, setUserTimer] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!institutions) return;
    institutions.forEach(({ exams }) => {
      const filteredExam = exams.filter(({ _id }) => _id === examId);
      if (filteredExam.length > 0) {
        setCurrentQuestion(filteredExam[0].questions[currentQuestionIndex]);
        setExam(...filteredExam);
      }
    });
  }, [institutions, currentQuestionIndex, examId]);

  useEffect(() => {
    if (!exam) return;
    const answerKeyArray = Array.from({ length: exam.questions.length }).map(
      (_, index) => ({
        questionIndex: index + 1,
        answer: null,
      }),
    );
    setAnswerKey(answerKeyArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exam]);

  // Save progress
  useEffect(() => {
    if (!answerKey || answerKey.length === 0) return;
    localStorage.setItem(examId, JSON.stringify(answerKey));
  }, [answerKey, examId]);

  const [showQuestionList, setShowQuestionList] = useState(false);

  function changeQuestionHandler(index) {
    setCurrentQuestionIndex(index);
    setShowQuestionList(false);
  }

  function handleClick(direction) {
    // -1 Left / 1 Right
    setCurrentQuestionIndex((prevIndex) => {
      const length = exam?.questions.length || 1;
      const newIndex = (prevIndex + direction + length) % length;
      return newIndex;
    });
  }

  async function handleFinishExam() {
    if (!confirm(t("finishExamConfirm"))) return;
    const { _id: userId } = user.profile;
    await finishExam({ answerKey, exam, userId, userTimer, setUser });

    toast.success(t("finished"));
    navigate("/", { replace: true });
  }

  if (!exam || !answerKey) return null;
  const isAnswered = answerKey.map((el) => el.answer !== null);
  return (
    <div className="flex flex-col items-center justify-between w-full h-full md:justify-start">
      <Timer
        title={exam.examName}
        durationInMinutes={exam.durationInMinutes}
        setIsBlurred={setIsBlurred}
        examId={examId}
        continueSavedProgress={continueSavedProgress}
        setUserTimer={setUserTimer}
      />
      <div
        className={`${isBlurred ? "blur-sm" : ""} flex flex-col items-center border-t-4 justify-start w-full h-fit overflow-y-auto bg-gradient-to-b dark:from-zinc-200 dark:to-zinc-400 `}
      >
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
        className="relative w-full h-fit bg-zinc-800"
      >
        <div className="z-40 flex flex-col flex-wrap items-center justify-center w-full gap-4 p-4 text-center bg-white border-b-2 h-fit dark:bg-zinc-800 ">
          <p className="text-2xl dark:text-white">{t("questionsList")}</p>
          <div className="flex flex-wrap w-full gap-4 p-4 max-h-[150px] overflow-y-auto">
            {answerKey.map((_, index) => {
              return (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  onClick={() => changeQuestionHandler(index)}
                  className={`${answerKey[index]?.answer !== null ? "border-4 border-blue-500 bg-blue-200" : ""} bg-zinc-300 shadow-lg dark:bg-zinc-500  hover:animate-pulse  w-12 text-2xl h-12 rounded-md flex items-center justify-center font-bold`}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
          <div
            className="p-2 text-2xl rounded-md shadow-lg bg-zinc-100 dark:bg-zinc-500 hover:animate-pulse drop-shadow-md"
            onClick={handleFinishExam}
          >
            {t("finishExam")}
          </div>
        </div>
      </ContainerAnimation>

      <div className="relative bottom-0 md:mt-auto flex shrink-0 gap-2 items-center justify-evenly h-[5.25rem] w-full md:justify-center md:gap-8  z-30 dark:text-white bg-white  dark:bg-zinc-800">
        <ChevronLeftIcon
          size="2rem"
          onClick={() => handleClick(-1)}
          className={`${isAnswered[currentQuestionIndex] ? "animate-pulse" : ""} dark:stroke-white stroke-black `}
        />
        <span className="flex gap-2 text-2xl">
          <p> {t("question")}</p>
          <p>
            {currentQuestion?.index}/{exam.questions.length}
          </p>
        </span>
        <ChevronRightIcon
          size="2rem"
          className={`${isAnswered[currentQuestionIndex] ? "animate-pulse" : ""} dark:stroke-white stroke-black `}
          onClick={() => handleClick(1)}
        />
        <ListIcon
          className=" dark:stroke-white stroke-black"
          size="2rem"
          onClick={() => setShowQuestionList((state) => !state)}
        />
      </div>
    </div>
  );
}

ExamContainer.propTypes = {
  continueSavedProgress: PropType.bool,
  examId: PropType.string,
};
