import React, { lazy, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MenuIcon from '../UI/icons/MenuIcon';

import MenuOptions from './MenuOptions';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../contexts/UserContext';
import ProfileContainer from './ProfileContainer';

const LogIn = lazy(() => import('../Features/LogIn'));
const Checker = lazy(() => import('../Features/AnswerKeyChecker'));
const Settings = lazy(() => import('../Features/Settings'));

export default function Nav({ selected }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [showChecker, setShowChecker] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { t } = useTranslation();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (showChecker) document.title = ` Way To Ace | ${t('checker')}`;
    if (showLogIn) document.title = ` Way To Ace | ${t('logIn')}`;
    if (showSettings) document.title = ` Way To Ace | ${t('settings')}`;

    return () =>
      (document.title = `Way To Ace | ${selected?.institutionAbbreviatedName}`);
  }, [showLogIn, showChecker, showSettings, selected]);
  return (
    <>
      <div
        role="banner"
        className="fixed z-30 flex items-center justify-center w-full h-[5.25rem] bg-white shadow-lg dark:bg-zinc-800"
      >
        <MenuIcon onClick={() => setShowMenu((state) => !state)} />
        <span className="text-2xl font-bold dark:text-zinc-200">
          Way To Ace
        </span>
      </div>

      <MenuOptions
        showSettings={showSettings}
        showLogIn={showLogIn}
        showChecker={showChecker}
        showMenu={showMenu}
        showProfile={showProfile}
        setShowMenu={setShowMenu}
        setShowSettings={setShowSettings}
        setShowLogIn={setShowLogIn}
        setShowChecker={setShowChecker}
        setShowProfile={setShowProfile}
      />
      <Settings showSettings={showSettings} />
      {!user && !showProfile ? (
        <LogIn
          condition={!showChecker && showLogIn}
          bannerText={t('loginBanner')}
          bannerImage={'banner2.jpg'}
        />
      ) : (
        <ProfileContainer showProfile={showProfile} />
      )}
      {showChecker && user ? (
        <Checker condition={showChecker && user} />
      ) : (
        <LogIn
          condition={showChecker}
          bannerText={t('noUserChecker')}
          bannerImage={'banner4.png'}
        />
      )}
    </>
  );
}

Nav.propTypes = {
  selected: PropTypes.object,
};
