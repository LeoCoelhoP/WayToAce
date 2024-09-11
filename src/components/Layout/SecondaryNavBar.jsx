import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { InstitutionsContext } from "../../contexts/InstitutionsContext";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import CloseIcon from "../icons/CloseIcon";
import SearchIcon from "../icons/SearchIcon";

export default function SecondaryNavBar({
  searching = false,
  setSearching,
  selected = false,
  setSelected,
  query = false,
  setQuery,
}) {
  const { t } = useTranslation();
  const { institutions, setInstitutions } = useContext(InstitutionsContext);

  function handleNavigationClick(direction) {
    // Navigating Left Example
    // Current Index: 0 (first item)
    // Direction: -1 (left)
    // Institutions Length: 5
    // Calculation:
    // New Index: (0 - 1 + 5) % 5 = 4
    const currentIndex = selected.index;
    const newIndex =
      (currentIndex + direction + institutions.length) % institutions.length;
    setSelected({ ...institutions[newIndex], index: newIndex });
  }

  useEffect(() => {
    // Institutions To Be Displayed According to Query
    if (!query) return;

    const queryLower = query.toLowerCase();

    function isCharInSameOrderAsExamName(examName) {
      const examNameLower = examName.toLowerCase();
      let queryIndex = 0;

      // eslint-disable-next-line no-restricted-syntax
      for (const char of examNameLower) {
        if (char === queryLower[queryIndex]) {
          // eslint-disable-next-line no-plusplus
          queryIndex++;
          if (queryIndex === queryLower.length) return true;
        }
      }
      return false;
    }

    const updatedInstitutions = institutions.map((institution) => ({
      ...institution,
      exams: institution.exams.map((exam) => ({
        ...exam,
        display: isCharInSameOrderAsExamName(exam.examName),
      })),
    }));
    setInstitutions(updatedInstitutions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (institutions.length === 0 || !selected) return null;
  return (
    <div className="z-20 flex items-center justify-center w-full h-[2.63rem] gap-2 p-2 overflow-hidden rounded-md shadow-md bg-zinc-50 dark:bg-zinc-100 scroll-m-14 flex-none md:w-2/3 md:mx-auto ">
      {searching ? (
        <motion.form
          animate={{ y: 0 }}
          className="static w-5/6 h-8"
          initial={{ y: -100 }}
          transition={{ bounce: 0 }}
        >
          <input
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-8 placeholder-black bg-transparent border-2 rounded-md dark:border-zinc-400 indent-2"
            placeholder={t("searchPlaceHolder")}
          />
        </motion.form>
      ) : (
        <motion.div
          animate={{ y: 0 }}
          className="z-10 flex items-center w-1/2 md:w-1/4 "
          initial={{ y: -100 }}
          transition={{ bounce: 0 }}
        >
          <ChevronLeftIcon
            aria-label="Carousel Left Button"
            className="cursor-pointer fill-none stroke-black"
            onClick={() => handleNavigationClick(-1)}
            role="button"
            size="2rem"
          />
          {institutions.map((institution, index) =>
            institution.institutionAbbreviatedName ===
            selected.institutionAbbreviatedName ? (
              <motion.span
                // eslint-disable-next-line no-underscore-dangle
                key={institution._id}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-2 mx-auto font-bold text-center text-black dark:text-black"
                initial={{ opacity: 0, x: -10 }}
                transition={{ bounce: 0 }}
              >
                {selected.institutionAbbreviatedName}
                <p className="font-normal">
                  {index + 1}/{institutions.length}
                </p>
              </motion.span>
            ) : null,
          )}
          <ChevronRightIcon
            aria-label="Carousel Right Button"
            className="cursor-pointer fill-none stroke-black"
            onClick={() => handleNavigationClick(1)}
            role="button"
            size="2rem"
          />
        </motion.div>
      )}
      <div className="flex flex-shrink-0 gap-2 ml-auto cursor-pointer">
        {searching ? (
          <CloseIcon
            className="dark:stroke-black stroke-black"
            onClick={() => {
              setInstitutions(
                institutions.map((institution) => ({
                  ...institution,
                  exams: institution.exams.map((exam) => ({
                    ...exam,
                    display: true,
                  })),
                })),
              );
              setSearching(false);
            }}
            size="1.5rem"
          />
        ) : (
          <SearchIcon
            className="dark:stroke-black stroke-black"
            onClick={() => setSearching((prev) => !prev)}
            size="1.5rem"
          />
        )}
      </div>
    </div>
  );
}

SecondaryNavBar.propTypes = {
  searching: PropTypes.bool,
  setSearching: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  selected: PropTypes.object,
  setSelected: PropTypes.func.isRequired,
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};
