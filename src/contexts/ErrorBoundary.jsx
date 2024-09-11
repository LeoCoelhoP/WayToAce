import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { withTranslation } from "react-i18next";

import ErrorIcon from "../components/icons/ErrorIcon";

function reloadPage() {
  window.location.reload();
}

class ErrorBoundary extends Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log("Error caught by Error Boundary:", error, info);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      const { t } = this.props;

      return (
        <div className="p-10 text-center w-svw h-svh bg-zinc-50">
          <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-md shadow-lg">
            <ErrorIcon className="stroke-black" size="4rem" />
            <h1 className="text-lg font-semibold">
              {t("errorBoundaryMessage")}
            </h1>
            <button
              onClick={reloadPage}
              className="w-2/3 p-2 text-lg font-medium text-blue-700 rounded-md shadow-lg bg-zinc-100"
              type="button"
            >
              {t("clickToReload")}
            </button>
          </div>
        </div>
      );
    }
    const { children } = this.props;
    return children;
  }
}

export default withTranslation()(ErrorBoundary);

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  t: PropTypes.func.isRequired,
};
