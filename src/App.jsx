import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import i18n from "./configs/i18n";
import InstitutionProvider from "./contexts/InstitutionsContext";
import SettingsProvider from "./contexts/SettingsContext";
import UserProvider from "./contexts/UserContext";
import ErrorBoundary from "./contexts/ErrorBoundary";
import Loading from "./components/UI/Loading";

const Exam = lazy(() => import("./pages/Exam"));
const Home = lazy(() => import("./pages/Home"));
const PrivateRoute = lazy(() => import("./components/Layout/PrivateRoute"));

function AppProviders({ children = null }) {
  return (
    <I18nextProvider i18n={i18n}>
      <SettingsProvider>
        <InstitutionProvider>
          <UserProvider>{children}</UserProvider>
        </InstitutionProvider>
      </SettingsProvider>
    </I18nextProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/exam/:examId"
          element={
            <PrivateRoute>
              <Exam />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppProviders>
        <Router>
          <AppRoutes />
          <ToastContainer
            toastClassName="toast"
            className="z-30 text-xl md:w-1/2"
            position="bottom-center"
            pauseOnHover
            closeOnClick
          />
        </Router>
      </AppProviders>
    </ErrorBoundary>
  );
}
