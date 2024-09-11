import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import ContainerAnimation from "./ContainerAnimation";
import HomeExamCard from "../UI/HomeExamCard";

export default function PracticeExamsContainer({
  searching = false,
  practiceExams = [],
}) {
  const { t } = useTranslation();

  const practiceExamsToDisplay = practiceExams?.filter((el) => el.display);
  if (!practiceExamsToDisplay) return null;

  const toBeRender =
    !searching || practiceExamsToDisplay.length > 0 ? (
      <ContainerAnimation
        animate={{ y: 0 }}
        condition={!searching || practiceExamsToDisplay.length > 0}
        className="flex flex-col gap-1 h-fit md:flex-row md:flex-wrap md:items-center md:justify-center md:w-2/3 md:mx-auto md:bg-gradient-to-br md:from-white md:dark:to-zinc-800 md:dark:from-zinc-400 md:to-zinc-20 md:py-4 md:rounded-md"
        initial={{ y: -50 }}
        exit={{ y: -50 }}
        transition={{ duration: 0.4, bounce: 0 }}
      >
        {practiceExamsToDisplay.map((el) => (
          <HomeExamCard key={el.examName} data={el} />
        ))}
      </ContainerAnimation>
    ) : (
      <ContainerAnimation
        animate={{ y: 0 }}
        condition={searching}
        className="flex flex-col items-center justify-center w-full p-10 text-center rounded-md bg-zinc-300 md:bg-zinc-400 md:w-2/3 md:mx-auto"
        initial={{ y: -50 }}
        exit={{ y: -50 }}
        transition={{ duration: 0, bounce: 0 }}
      >
        <p className="text-xl animate-pulse">{t("noExam")}</p>
      </ContainerAnimation>
    );
  return toBeRender;
}

PracticeExamsContainer.propTypes = {
  practiceExams: PropTypes.array,
  searching: PropTypes.bool,
};
