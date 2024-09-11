import React from "react";
import PropTypes from "prop-types";

export default function MenuIcon({ className = "", onClick, size = 24 }) {
  return (
    <svg
      className={className}
      fill="none"
      height={size}
      onClick={onClick}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </svg>
  );
}

MenuIcon.propTypes = {
  onClick: PropTypes.func,
};
