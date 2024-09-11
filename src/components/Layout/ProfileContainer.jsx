/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";
import ContainerAnimation from "./ContainerAnimation";
import NoLastResults from "../UI/NoLastResults";
import PercentageIcons from "../icons/PercentageIcon";
import ChevronsDownIcon from "../icons/ChevronsDownIcon";
import ChevronsUpIcon from "../icons/ChevronsUpIcon";
import LineChart from "../UI/LineChart";
import LogOutIcon from "../icons/LogOutIcon";
import { getUserResults, logOut } from "../../services/user";

export default function ProfileContainer({ showProfile = false }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user, setUser } = useContext(UserContext);
  const [lastResults, setLastResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [showAllResults, setShowAllResults] = useState(false);

  // Last Results By Subjects

  useEffect(() => {
    async function fetchLastResults() {
      const { _id: userId } = user.profile;
      const response = await getUserResults({ userId });
      setAllResults(response.exams);
      setLastResults(response.exams.slice(0, 3));
    }

    if (!user?.profile) return navigate("/", { replace: true });
    fetchLastResults();
  }, [user, navigate]);

  function handleLogOut() {
    logOut(setUser);
  }
  const reverseLastResulstsToChart = [...lastResults].reverse();
  const lastResultsChartData = {
    labels: [
      reverseLastResulstsToChart.length
        ? new Date(reverseLastResulstsToChart[0]?.createdAt)
            ?.toISOString()
            ?.split("T")[0]
        : null,
      reverseLastResulstsToChart.length > 1
        ? new Date(reverseLastResulstsToChart[1]?.createdAt)
            ?.toISOString()
            ?.split("T")[0]
        : null,
      reverseLastResulstsToChart.length > 2
        ? new Date(reverseLastResulstsToChart[2]?.createdAt)
            ?.toISOString()
            ?.split("T")[0]
        : null,
    ],
    datasets: [
      {
        data: [
          reverseLastResulstsToChart[0]?.userResult,
          reverseLastResulstsToChart[1]?.userResult,
          reverseLastResulstsToChart[2]?.userResult,
        ],
        pointRadius: 13,
        pointHoverRadius: 8,
        pointBorderWidth: 2,
        fill: true,
        cubicInterpolationMode: "monotone",
        tension: 1,
      },
    ],
  };

  return (
    <ContainerAnimation
      condition={showProfile}
      transition={{ duration: 0.4, bounce: 0 }}
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ y: -1000 }}
      className="fixed  flex-col overflow-y-auto bg-gradient-to-b dark:from-zinc-400  pb-[5rem] dark:to-zinc-700 from-zinc-100 to-zinc-200  z-30 flex items-start justify-start w-full mt-[calc(5.5rem-10px)] shadow-lg h-full gap-6 "
    >
      <div className="flex flex-col items-start justify-start w-full h-full gap-2 p-4 shadow-lg dark:bg-zinc-700 bg-zinc-200 md:w-1/2 md:mx-auto">
        <h1 className="p-4 pl-0 text-xl font-bold text-center dark:text-white">
          {t("welcome")},&nbsp;
          <span className="capitalize">{user?.profile?.name}!</span>
        </h1>
        <div className="flex gap-2 dark:text-white" onClick={handleLogOut}>
          <LogOutIcon className="stroke-black dark:stroke-white" />
          {t("logOut")}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full gap-2 p-4 shadow-lg dark:bg-zinc-700 bg-zinc-200 md:w-1/2 md:mx-auto">
        <h1 className="z-20 w-[101%] pt-2 text-2xl font-medium text-start dark:text-white dark:bg-zinc-700 ">
          {t("lastResults")}
        </h1>
        {!lastResults?.length && <NoLastResults />}
        {!showAllResults && (
          <motion.div
            transition={{ duration: 0.4, bounce: 0 }}
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            className="flex flex-col w-full gap-4 pb-4 overflow-y-auto h-fit"
          >
            {lastResults?.map((el, index) =>
              index <= 2 ? (
                <div
                  key={index}
                  className="flex items-center justify-between w-full gap-2 p-4 text-2xl font-medium rounded-md shadow-lg h-fit drop-shadow-sm bg-zinc-300"
                >
                  <h1 className="font-light break-words">
                    {el?.exam?.examName}
                  </h1>
                  <div className="flex items-center justify-center font-medium">
                    <h2>{el.userResult}</h2>
                    <PercentageIcons className="stroke-black" size="2rem" />
                  </div>
                </div>
              ) : null,
            )}
          </motion.div>
        )}
        {showAllResults && (
          <motion.div
            transition={{ duration: 0.4, bounce: 0 }}
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            className="flex flex-col w-full gap-2 pb-4 overflow-y-auto h-fit"
          >
            {allResults.map((el) => (
              <div
                key={el.exam.examName}
                className="flex items-center justify-between w-full p-6 text-2xl font-medium rounded-md shadow-lg h-fit drop-shadow-sm bg-zinc-300"
              >
                <h1 className="font-light break-words">{el.exam.examName}</h1>
                <div className="flex items-center justify-center font-medium">
                  <h2>{el.userResult}</h2>
                  <PercentageIcons className="stroke-black" size="2rem" />
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {lastResults?.length > 2 && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            onClick={() => setShowAllResults((state) => !state)}
            className="dark:text-white"
          >
            {!showAllResults ? (
              <div className="flex gap-2 text-lg cursor-pointer">
                <p>{t("showLess")}</p>
                <ChevronsDownIcon className="dark:stroke-white stroke-black" />
              </div>
            ) : (
              <div className="flex gap-2 text-lg cursor-pointer">
                <ChevronsUpIcon className="dark:stroke-white stroke-black" />
                <p>{t("showMore")}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-4 p-4 shadow-lg h-fit dark:bg-zinc-700 bg-zinc-200 md:w-1/2 md:mx-auto ">
        <h1 className="z-20 w-full text-2xl font-medium text-start dark:text-white ">
          {t("lastThreeExams")}
        </h1>
        {lastResultsChartData && <LineChart chartData={lastResultsChartData} />}
      </div>
    </ContainerAnimation>
  );
}

ProfileContainer.propTypes = {
  showProfile: PropTypes.bool,
};
