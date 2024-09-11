/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import AdBanner from "../UI/AdBanner";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";

export default function PreExamContainer({
  setContinueSavedProgress,
  setInProgress,
}) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function navigateBack() {
    navigate("/");
  }

  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer <= 0) setInProgress(true);
    const interval = setInterval(() => setTimer((state) => state - 1), 1000);

    return () => window.clearInterval(interval);
  });

  return (
    <motion.div
      transition={{ duration: 1, bounce: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      className="flex flex-col items-center justify-start w-full overflow-hidden h-svh dark:text-white dark:bg-zinc-400 "
    >
      <div className="shadow-lg  w-full h-[5.25rem] bg-white dark:bg-zinc-800 flex items-center justify-center z-20">
        <span className="text-2xl font-bold text-center dark:text-zinc-200 font-rubik">
          Way To Ace
        </span>
        <span
          onClick={navigateBack}
          className="absolute flex items-center flex-grow-0 w-16 ml-4 text-xl font-light start-0 dark:text-zinc-200"
        >
          <ChevronLeftIcon
            className="dark:stroke-white stroke-black shrink-0"
            size="2rem"
          />
        </span>
      </div>
      <div className="flex flex-col items-center justify-start gap-4 overflow-hidden h-fit md:p-4 md:dark:bg-zinc-500 md:h-full md:my-4 md:rounded-md">
        <div className="flex flex-col items-center gap-6 p-6 md:rounded-md dark:bg-zinc-500">
          <p className="text-2xl text-center">{t("almostThere")}</p>
          <div className="flex gap-4 text-2xl border-2 rounded-full w-[75px] h-[75px] items-center justify-center">
            {timer}
          </div>
          <p>{t("almostThereMsg")}</p>
        </div>
        <AdBanner />
        <AdBanner />
      </div>
    </motion.div>
  );
}

PreExamContainer.propTypes = {
  setContinueSavedProgress: PropTypes.func.isRequired,
  setInProgress: PropTypes.func.isRequired,
};
