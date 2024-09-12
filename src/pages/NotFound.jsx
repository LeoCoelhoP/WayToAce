import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ChevronLeftIcon from "../components/icons/ChevronLeftIcon";
import NotFoundIcon from "../components/icons/NotFoundIcon";

export default function NotFound() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  function handleNavigateHome() {
    navigate("/", { replace: true });
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 rounded-md h-svh bg-zinc-300">
      <NotFoundIcon size="10rem" className="mx-auto stroke-black" />
      <div className="mt-4 text-2xl font-bold text-center">{t("notFound")}</div>
      <button
        type="button"
        onClick={handleNavigateHome}
        className="flex items-center justify-center gap-2 p-4 mt-8 text-xl font-medium rounded-md shadow-md bg-zinc-50 hover:bg-zinc-200 active:bg-zinc-300"
        aria-label={t("notFoundReturnBtn")}
      >
        <ChevronLeftIcon
          aria-label={t("goToHomePage")}
          className="stroke-black"
          size="4rem"
        />
        {t("notFoundReturnBtn")}
      </button>
    </div>
  );
}
