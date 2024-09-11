/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import ContainerAnimation from "../Layout/ContainerAnimation";
import InfoIcon from "../icons/InfoIcon";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import CloseIcon from "../icons/CloseIcon";
import ClockPauseIcon from "../icons/ClockPauseIcon";
import ClockResumeIcon from "../icons/ClockResumeIcon";

export default function Timer({
  durationInMinutes,
  setIsBlurred,
  setUserTimer,
  title,
  examId,
  continueSavedProgress,
}) {
  const [isPaused, setIsPaused] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const getInitialTime = useCallback(() => {
    const savedTimer = JSON.parse(localStorage.getItem("timers"))?.find(
      (el) => el.examId === examId,
    )?.remainingTime;
    const time = new Date();
    if (!savedTimer || !continueSavedProgress) {
      time.setSeconds(time.getSeconds() + durationInMinutes * 60);
    } else {
      time.setSeconds(time.getSeconds() + savedTimer);
    }
    return time;
  }, [durationInMinutes, continueSavedProgress, examId]);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const { totalSeconds, seconds, minutes, hours, pause, resume } = useTimer({
    expiryTimestamp: getInitialTime(),
  });

  useEffect(() => {
    if (showInfo) pause();
    else resume();
  }, [showInfo, pause, resume]);

  function handleNavigateBack() {
    if (window.confirm(t("closeExamConfirm"))) {
      navigate("/");
    }
  }

  useEffect(() => {
    function handleBeforeUnload(e) {
      pause();
      resume();
      e.preventDefault();
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [examId, totalSeconds, pause, resume]);

  // Set userTimer
  useEffect(() => {
    setUserTimer(totalSeconds);
  }, [totalSeconds, setUserTimer]);

  return (
    <div className="z-30 flex flex-col items-center justify-center w-full gap-2 p-2 bg-white shadow-lg dark:bg-zinc-800 dark:text-zinc-200">
      <span
        onClick={handleNavigateBack}
        className="absolute flex items-center flex-grow-0 w-16 ml-4 text-2xl font-light start-0"
      >
        <ChevronLeftIcon
          className="dark:stroke-white stroke-black shrink-0"
          size="2rem"
        />
      </span>
      <span>
        <h1 className="text-2xl font-medium text-center">{title}</h1>
        <div className="flex items-center justify-center w-full gap-2">
          {!isPaused ? (
            <motion.div
              onClick={() => {
                pause();
                setIsPaused(true);
              }}
              transition={{ duration: 0.7, bounce: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <ClockPauseIcon
                className="dark:stroke-white stroke-black"
                size="2rem"
              />
            </motion.div>
          ) : (
            <motion.div
              onClick={() => {
                resume();
                setIsPaused(false);
              }}
              transition={{ duration: 0.7, bounce: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <ClockResumeIcon
                className="dark:stroke-white stroke-black"
                size="2rem"
              />
            </motion.div>
          )}
          <div className="text-2xl">
            {`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
          </div>
          <InfoIcon
            className="stroke-black dark:stroke-white"
            size="2rem"
            onClick={() => {
              setShowInfo((prev) => !prev);
              setIsBlurred((prev) => !prev);
            }}
          />
        </div>
      </span>
      <ContainerAnimation
        condition={showInfo}
        transition={{ duration: 0.7, bounce: 0 }}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        exit={{ y: -20 }}
        className="z-0 absolute top-[4.5rem] blur-none"
      >
        <div className="w-full p-4 text-2xl text-center text-black shadow-lg bg-zinc-200 dark:text-white h-fit dark:bg-zinc-700 bg-opacity-80">
          <CloseIcon
            size="2rem"
            className="stroke-black dark:stroke-white"
            onClick={() => {
              setIsBlurred(false);
              setShowInfo((prev) => !prev);
            }}
          />
          <p className="p-6">{t("timerInfo")}</p>
        </div>
      </ContainerAnimation>
    </div>
  );
}

Timer.propTypes = {
  durationInMinutes: PropTypes.number.isRequired,
  continueSavedProgress: PropTypes.bool.isRequired,
  examId: PropTypes.string.isRequired,
  setIsBlurred: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setUserTimer: PropTypes.func.isRequired,
};
