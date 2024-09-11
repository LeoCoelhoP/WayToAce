/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import CloseIcon from "../icons/CloseIcon";
import LogInIcon from "../icons/LogInIcon";
import QrCodeIcon from "../icons/QrCodeIcon";
import SettingsIcon from "../icons/SettingsIcon";
import ContainerAnimation from "./ContainerAnimation";
import { UserContext } from "../../contexts/UserContext";
import UserIcon from "../icons/UserIcon";

export default function MenuOptions({
  showProfile = false,
  setShowLogIn,
  showLogIn = false,
  setShowMenu,
  showMenu = false,
  setShowSettings,
  setShowProfile,
}) {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  return (
    <ContainerAnimation
      condition={showMenu}
      transition={{ duration: 0.7, bounce: 0 }}
      className="fixed z-40 flex items-center justify-center w-full p-4 gap-2 bg-white shadow-lg dark:bg-zinc-800 h-[5.25rem]"
      initial={{ y: -256 }}
      animate={{ y: 0 }}
      exit={{ y: -256 }}
    >
      <div className="flex flex-col items-center justify-center gap-2 text-x">
        <CloseIcon
          size="2rem"
          className="stroke-black stroke-[0.2rem] dark:stroke-zinc-50"
          onClick={() => {
            setShowLogIn(false);
            setShowMenu(false);
            setShowProfile(false);
            setShowSettings(false);
          }}
        />
      </div>
      <div className="flex items-center gap-12 mx-auto h-fit">
        <div
          className={`${showLogIn || showProfile ? "animate-pulse" : ""} flex flex-col items-center gap-1 text-xl`}
        >
          {user ? (
            <div
              className="flex items-center justify-center cursor-pointer w-fit h-fit"
              onClick={() => {
                setShowLogIn(false);
                setShowProfile((state) => !state);
                setShowSettings(false);
              }}
            >
              <UserIcon
                size="1.5rem"
                className="mr-1 stroke-black dark:stroke-zinc-50"
              />
              <p className="text-base dark:text-zinc-50">{t("profile")}</p>
            </div>
          ) : (
            <div
              className="flex items-center justify-center cursor-pointer w-fit h-fit"
              onClick={() => {
                setShowLogIn((state) => !state);
                setShowProfile(true);
                setShowSettings(false);
              }}
            >
              <LogInIcon
                size="1.5rem"
                className="mr-1 stroke-black dark:stroke-zinc-50"
              />
              <p className="text-base dark:text-zinc-50">{t("logIn")}</p>
            </div>
          )}
        </div>
        <div
          className="flex items-center gap-1 text-xl cursor-pointer"
          onClick={() => setShowSettings((state) => !state)}
        >
          <SettingsIcon
            size="1.5rem"
            className="stroke-black dark:stroke-zinc-50"
          />
          <p className="text-base dark:text-zinc-50">{t("settings")}</p>
        </div>
      </div>
    </ContainerAnimation>
  );
}

MenuOptions.propTypes = {
  setShowLogIn: PropTypes.func.isRequired,
  showLogIn: PropTypes.bool,
  showProfile: PropTypes.bool,
  setShowProfile: PropTypes.func.isRequired,
  setShowSettings: PropTypes.func.isRequired,
  setShowMenu: PropTypes.func.isRequired,
  showMenu: PropTypes.bool,
};
