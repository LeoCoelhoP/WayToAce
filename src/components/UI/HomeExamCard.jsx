import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { UserContext } from "../../contexts/UserContext";
import DownloadIcon from "../icons/DownloadIcon";
import WifiIcon from "../icons/WifiIcon";
import ToastFunction from "../../Helpers/ToastFunction";

export default function HomeExamCard({ data }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { examName, imageSrc, interactions, _id, pdfSrc } = data;

  function handleNavigateToExam() {
    if (user) navigate(`/exam/${_id}`);
    else {
      ToastFunction({
        text: t("noUserTakeExam"),
        type: "info",
        duration: 4000,
      });
    }
  }

  function handleDownloadExam() {
    fetch(pdfSrc).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = examName;
        alink.click();
      });
    });
    ToastFunction({
      text: t("successfullyDownloaded"),
      type: "success",
      duration: 6000,
    });
  }

  return (
    <div className=" flex flex-col items-center justify-center w-full p-2 pb-8 bg-white dark:bg-zinc-100 border-t-[1px] dark:border-zinc-300 border-l-[1px] border-r-[1px] rounded-md shadow-md drop-shadow-sm h-fit md:w-[48%] md:flex-none ">
      <h1 className="flex flex-col-reverse items-center justify-start w-full gap-4 mb-auto text-xl font-light text-center">
        <span className="w-full mb-2 font-medium">{examName}</span>
      </h1>
      <div className="flex gap-2 items-center justify-between h-[80px] w-full">
        <img
          alt={`${examName}`}
          className="h-[80px] w-1/3 rounded-md bg-white shadow-md border-t-[1px] border-l-[1px] border-r-[1px] dark:border-zinc-300 dark:border-b-[1px]"
          src={imageSrc}
        />
        <button
          aria-label={t("download")}
          className="w-1/2 flex flex-col items-center justify-between h-full p-1 text-center break-words rounded-md shadow-md border-t-[1px] border-l-[1px] border-r-[1px] dark:border-zinc-300 dark:border-b-[1px] bg-zinc-50 hover:bg-zinc-200 active:bg-zinc-300"
          onClick={handleDownloadExam}
          type="button"
        >
          <DownloadIcon size="1.5rem" className=" stroke-black shrink-0" />
          <p className="text-blue-600">{t("download")}</p>
        </button>
        <button
          aria-label={t("takeOnline")}
          className="w-1/2 flex flex-col items-center justify-between h-full p-1 text-center break-words rounded-md shadow-md border-t-[1px] border-l-[1px] border-r-[1px] dark:border-zinc-300 dark:border-b-[1px] bg-zinc-50 hover:bg-zinc-200 active:bg-zinc-300"
          onClick={handleNavigateToExam}
          type="button"
        >
          <WifiIcon size="1.5rem" className=" stroke-black shrink-0" />
          <p className="text-blue-600">{t("takeOnline")}</p>
        </button>
      </div>
    </div>
  );
}

HomeExamCard.propTypes = {
  data: PropTypes.shape({
    examName: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    interactions: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
