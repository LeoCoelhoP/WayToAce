import React, { createContext, useEffect, useMemo, useState } from "react";
import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";

import { getProfile } from "../services/user";
import ToastFunction from "../Helpers/ToastFunction";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const { t } = useTranslation();
  useEffect(() => {
    async function fetchUser() {
      const response = await getProfile();
      if (!response) return;
      if (!user) {
        ToastFunction({
          text: `${t("welcome")}, ${response.user.profile.name}`,
          type: "success",
          duration: 2000,
        });
        setUser(response.user);
      }
    }

    fetchUser();
  }, [user, t]);

  const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
