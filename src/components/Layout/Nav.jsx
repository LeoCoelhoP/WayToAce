import React, { lazy, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { UserContext } from "../../contexts/UserContext";
import MenuOptions from "./MenuOptions";
import ProfileContainer from "./ProfileContainer";
import MenuIcon from "../icons/MenuIcon";

const LogIn = lazy(() => import("../Features/LogIn"));
const Settings = lazy(() => import("../Features/Settings"));

export default function Nav({ selected = null }) {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { t } = useTranslation();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (showLogIn) document.title = ` Way To Ace | ${t("logIn")}`;
    if (showSettings) document.title = ` Way To Ace | ${t("settings")}`;

    // eslint-disable-next-line no-return-assign
    return () =>
      (document.title = `Way To Ace | ${selected?.institutionAbbreviatedName}`);
  }, [showLogIn, showSettings, selected, t]);

  return (
    <div className="w-full">
      <div
        role="banner"
        className="fixed z-30 flex items-center justify-center w-full h-[5.25rem] bg-white shadow-lg dark:bg-zinc-800 "
      >
        <MenuIcon
          onClick={() => setShowMenu((state) => !state)}
          className="absolute ml-4 cursor-pointer stroke-black dark:stroke-white start-0"
          size={32}
        />
        <span className="text-2xl font-bold dark:text-white">Way To Ace</span>
      </div>

      <MenuOptions
        showSettings={showSettings}
        showLogIn={showLogIn}
        showMenu={showMenu}
        showProfile={showProfile}
        setShowMenu={setShowMenu}
        setShowSettings={setShowSettings}
        setShowLogIn={setShowLogIn}
        setShowProfile={setShowProfile}
      />
      <Settings showSettings={showSettings} />
      {!user && showProfile ? (
        <LogIn
          condition={!user && showProfile}
          bannerText={t("loginBanner")}
          bannerImage="logInBanner.jpg"
        />
      ) : (
        <ProfileContainer showProfile={showProfile} />
      )}
    </div>
  );
}

Nav.propTypes = {
  selected: PropTypes.object,
};
