import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import ContainerAnimation from "../Layout/ContainerAnimation";

export default function Settings({ showSettings = false }) {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );
  const [autoTranslate, setAutoTranslate] = useState(
    localStorage.getItem("autoTranslate") !== "false",
  );

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    function checkAutoTranslateData() {
      const inStroage = localStorage.getItem("autoTranslate");
      if (inStroage) setAutoTranslate(inStroage);
    }

    window.addEventListener("storage", checkAutoTranslateData);

    return () => {
      window.removeEventListener("storage", checkAutoTranslateData);
    };
  }, []);

  function toggleAutoTranslate() {
    const lng = navigator.language || navigator.userLanguage;
    setAutoTranslate((state) => {
      localStorage.setItem("lng", lng);
      localStorage.setItem("autoTranslate", !state);
      return !state;
    });
    i18n.changeLanguage(autoTranslate ? "en" : lng);
  }
  return (
    <ContainerAnimation
      condition={showSettings}
      animate={{ y: 0 }}
      className="fixed dark:bg-zinc-800 z-40 flex items-center justify-between w-full p-6 mt-[calc(5.5rem-10px)] bg-white shadow-lg h-fit"
      initial={{ y: -256 }}
      exit={{ y: -256 }}
      transition={{ bounce: 0 }}
    >
      <form className="flex items-center justify-center w-full h-full gap-8 mt-2 text-center">
        <label
          htmlFor="darkMode"
          className="inline-flex flex-col items-center mb-5 cursor-pointer"
        >
          <input
            aria-label="Dark Mode Checkbox"
            id="darkMode"
            type="checkbox"
            onChange={(e) => setDarkMode(e.target.checked)}
            checked={darkMode}
            className={`sr-only peer ${darkMode ? "dark" : ""} `}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          <span className="mt-2 text-sm font-medium text-black dark:text-white">
            {t("darkMode")}
          </span>
        </label>

        <label
          htmlFor="autoTranslate"
          className="inline-flex flex-col items-center mb-5 cursor-pointer"
        >
          <input
            aria-label="Auto Translate Checkbox"
            id="autoTranslate"
            onChange={toggleAutoTranslate}
            type="checkbox"
            checked={autoTranslate}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          <span className="mt-2 text-sm font-medium text-black dark:text-white">
            {t("autoTranslate")}
          </span>
        </label>
      </form>
    </ContainerAnimation>
  );
}

Settings.propTypes = {
  showSettings: PropTypes.bool,
};
