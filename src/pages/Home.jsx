import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { InstitutionsContext } from "../contexts/InstitutionsContext";
import Banner from "../components/UI/Banner";
import ContainerAnimation from "../components/Layout/ContainerAnimation";
import Nav from "../components/Layout/Nav";
import PracticeExamsContainer from "../components/Layout/PracticeExamsContainer";
import SecondaryNavBar from "../components/Layout/SecondaryNavBar";

export default function Home() {
  const [searching, setSearching] = useState(false);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const { institutions } = useContext(InstitutionsContext);
  const { t } = useTranslation();
  useEffect(() => {
    if (institutions?.length)
      setSelected({
        ...institutions[0],
        index: 0,
      });
  }, [institutions]);

  useEffect(() => {
    if (!selected?.institutionAbbreviatedName) return;
    const title = searching
      ? `Way To Ace | Searching...`
      : `Way To Ace | ${selected.institutionAbbreviatedName}`;

    document.title = title;
  }, [searching, selected]);

  if (institutions?.length === 0 || !selected) return null;

  return (
    <div className="flex-col overflow-y-auto bg-gradient-to-b dark:from-zinc-400 dark:to-zinc-700 from-zinc-100 to-zinc-300 font-rubik w-svw h-svh">
      <Nav selected={selected} />
      <div className="flex flex-col w-full gap-4 p-2 mt-[5.25rem]  md:bg-zinc-300  md:mx-auto md:h-full ">
        <Banner
          imgSrc="banner.jpg"
          bannerText={t("bannerText")}
          className="mx-auto md:w-2/3 "
        />
        <SecondaryNavBar
          query={query}
          setQuery={setQuery}
          searching={searching}
          setSearching={setSearching}
          selected={selected}
          setSelected={setSelected}
        />
        {searching && query.length <= 2 ? (
          <ContainerAnimation
            animate={{ y: 0 }}
            condition={searching}
            className="flex flex-col items-center justify-center w-full p-10 text-center rounded-md bg-zinc-200 dark:bg-zinc-400 md:w-2/3 md:mx-auto "
            initial={{ y: -50 }}
            exit={{ y: -50 }}
            transition={{ duration: 0, bounce: 0 }}
          >
            <p className="text-xl animate-pulse">{t("searchingInitialText")}</p>
          </ContainerAnimation>
        ) : (
          <PracticeExamsContainer
            searching={searching}
            practiceExams={selected?.exams}
          />
        )}
      </div>
    </div>
  );
}
