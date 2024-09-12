import React, { createContext, useEffect, useMemo, useState } from "react";
import { PropTypes } from "prop-types";

import getInstitutions from "../services/institutions";
import { useTranslation } from "react-i18next";

export const InstitutionsContext = createContext({});

export default function InstitutionsProvider({ children }) {
  const [institutions, setInstitutions] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    async function fetchInstitutions() {
      const data = await getInstitutions();
      if (!data) return;

      if (i18n.language === "en")
        return setInstitutions([...data?.institutions].reverse());

      setInstitutions(data.institutions);
    }
    fetchInstitutions();
  }, [i18n]);

  const contextValue = useMemo(
    () => ({ institutions, setInstitutions }),
    [institutions, setInstitutions],
  );

  return (
    <InstitutionsContext.Provider value={contextValue}>
      {children}
    </InstitutionsContext.Provider>
  );
}

InstitutionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
