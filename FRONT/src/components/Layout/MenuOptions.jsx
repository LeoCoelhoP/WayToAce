import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import CloseIcon from '../UI/icons/CloseIcon';
import LogInIcon from '../UI/icons/LogInIcon';
import QrCodeIcon from '../UI/icons/QrCodeIcon';
import SettingsIcon from '../UI/icons/SettingsIcon';
import ContainerAnimation from './ContainerAnimation';
import { UserContext } from '../../contexts/UserContext';
import UserIcon from '../UI/icons/UserIcon';

export default function MenuOptions({
  setShowChecker,
  showChecker,
  showProfile,
  setShowLogIn,
  showLogIn,
  setShowMenu,
  showMenu,
  setShowSettings,
  setShowProfile,
}) {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  return (
    <ContainerAnimation
      condition={showMenu}
      transition={{ duration: 0.7, bounce: 0 }}
      className="fixed z-40 flex items-center justify-center w-full p-4 bg-white shadow-lg dark:bg-zinc-800 h-[5.25rem]"
      initial={{ y: -256 }}
      animate={{ y: 0 }}
      exit={{ y: -256 }}
    >
      <div className="flex flex-col items-center justify-center gap-1 text-xl">
        <CloseIcon
          size={'2rem'}
          className={'stroke-black stroke-[0.2rem] dark:stroke-zinc-50'}
          onClick={() => {
            setShowChecker(false);
            setShowLogIn(false);
            setShowSettings(false);
            setShowProfile(false);
            setShowMenu((state) => !state);
          }}
        />
      </div>
      <div className="flex items-center gap-4 mx-auto h-fit">
        <div
          onClick={() => {
            setShowSettings(false);
            setShowLogIn(false);
            setShowProfile(false);
            setShowChecker((state) => !state);
          }}
          className={`${showChecker ? 'animate-pulse' : ''} flex  items-center  gap-1`}
        >
          <QrCodeIcon
            size={'1.5rem'}
            className={'stroke-black dark:stroke-zinc-50'}
          />
          <p className="text-base dark:text-zinc-50">{t('checker')}</p>
        </div>
        <div
          className={`${showLogIn || showProfile ? 'animate-pulse' : ''} flex flex-col items-center gap-1 text-xl`}
        >
          {user ? (
            <div
              className="flex items-center justify-center w-fit h-fit"
              onClick={() => {
                setShowChecker(false);
                setShowSettings(false);
                setShowLogIn(false);
                setShowProfile((state) => !state);
              }}
            >
              <UserIcon
                onClick={() => {
                  setShowChecker(false);
                  setShowSettings(false);
                  setShowProfile(false);
                  setShowLogIn((state) => !state);
                }}
                size={'1.5rem'}
                className={'stroke-black dark:stroke-zinc-50 mr-1'}
              />
              <p className="text-base dark:text-zinc-50">{t('profile')}</p>
            </div>
          ) : (
            <div
              className="flex items-center justify-center w-fit h-fit"
              onClick={() => {
                setShowChecker(false);
                setShowSettings(false);
                setShowLogIn((state) => !state);
              }}
            >
              <LogInIcon
                size={'1.5rem'}
                className={'stroke-black dark:stroke-zinc-50 mr-1'}
              />
              <p className="text-base dark:text-zinc-50">{t('logIn')}</p>
            </div>
          )}
        </div>
        <div
          className="flex items-center gap-1 text-xl"
          onClick={() => setShowSettings((state) => !state)}
        >
          <SettingsIcon
            size={'1.5rem'}
            className={'stroke-black  dark:stroke-zinc-50'}
          />
          <p className="text-base dark:text-zinc-50">{t('settings')}</p>
        </div>
      </div>
    </ContainerAnimation>
  );
}

MenuOptions.propTypes = {
  setShowChecker: PropTypes.func,
  showChecker: PropTypes.bool,
  setShowLogIn: PropTypes.func,
  showLogIn: PropTypes.bool,
  setShowSettings: PropTypes.func,
  setShowMenu: PropTypes.func,
  showMenu: PropTypes.bool,
};
