import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { UserContext } from "../../contexts/UserContext";
import ToastFunction from "../../Helpers/ToastFunction";

export default function PrivateRoute({ children }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (!user?.profile?.name) {
      ToastFunction({
        text: t("noUserTakeExam"),
        type: "info",
        duration: 4000,
      });
      navigate("/", { replace: true });
    }
  }, [user, navigate, t]);

  return children;
}
