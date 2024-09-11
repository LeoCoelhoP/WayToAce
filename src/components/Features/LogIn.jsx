/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import Banner from "../UI/Banner";
import MicrosoftIcon from "../icons/MicrosoftIcon";
import GoogleIcon from "../icons/GoogleIcon";
import ContainerAnimation from "../Layout/ContainerAnimation";
import GitHubIcon from "../icons/GitHubIcon";

export default function LogIn({
  bannerImage = "logInBanner.jpg",
  bannerText = "",
  condition = false,
}) {
  const { t } = useTranslation();

  return (
    <ContainerAnimation
      condition={condition}
      transition={{ duration: 0.4, bounce: 0 }}
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ y: -1000 }}
      className="fixed bg-gradient-to-b dark:from-zinc-400 dark:to-zinc-700 from-zinc-100 to-zinc-200  z-30 flex items-start justify-between w-full mt-[calc(5.5rem-10px)]  shadow-lg h-full md:justify-center md:pt-10"
    >
      <div className="flex flex-col w-full gap-4 md:w-1/2">
        <Banner imgSrc={bannerImage} bannerText={bannerText} />
        <div className="flex flex-col items-center justify-center w-full gap-4 p-4 md:p-0">
          <form
            action="http://localhost:80/auth/azure"
            method="GET"
            className="flex items-center justify-start w-full gap-4 text-lg font-bold text-white rounded-md shadow-md cursor-pointer bg-microsoftColor-50 Color-50 h-14"
          >
            <label
              htmlFor="azuredad LogIn"
              className="flex items-center justify-start w-full cursor-pointer"
            >
              <input
                name="azuredad LogIn"
                type="submit"
                id="azuredad LogIn"
                value=""
                placeholder=""
              />
              <MicrosoftIcon size="2rem" className="ml-4" />
              <p className="ml-4">{t("continueWithMicrosoft")}</p>
            </label>
          </form>

          <form
            action="http://localhost:80/auth/google"
            method="GET"
            className="flex items-center justify-start w-full gap-4 text-lg font-bold text-black text-opacity-50 bg-white rounded-md shadow-md cursor-pointer h-14"
          >
            <label
              htmlFor="googleLogIn"
              className="flex items-center justify-start w-full cursor-pointer"
            >
              <input
                name="googleLogIn"
                type="submit"
                id="googleLogIn"
                value=""
                placeholder=""
              />
              <GoogleIcon size="2rem" className="ml-4" />
              <p className="ml-4">{t("continueWithGoogle")}</p>
            </label>
          </form>

          <form
            action="http://localhost:80/auth/github"
            method="GET"
            className="flex items-center justify-start w-full gap-4 text-lg font-bold text-white bg-black rounded-md shadow-md cursor-pointer h-14"
          >
            <label
              htmlFor="githubLogIn"
              className="flex items-center justify-start w-full cursor-pointer"
            >
              <input
                name="githubLogIn"
                type="submit"
                id="githubLogIn"
                value=""
                placeholder=""
              />
              <GitHubIcon size="2rem" className="ml-4 fill-white" />
              <p className="ml-4">{t("continueWithGitHub")}</p>
            </label>
          </form>
        </div>
      </div>
    </ContainerAnimation>
  );
}

LogIn.propTypes = {
  bannerImage: PropTypes.string,
  bannerText: PropTypes.string,
  condition: PropTypes.bool,
};
