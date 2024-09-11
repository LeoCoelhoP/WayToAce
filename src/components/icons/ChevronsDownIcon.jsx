import React from "react";
import PropTypes from "prop-types";

export default function ChevronsDownIcon({
  arialLabel = "",
  className = "",
  onClick,
  role = "",
  size = 24,
}) {
  return (
    <svg
      aria-label={arialLabel}
      className={`${className} cursor-pointer`}
      fill="none"
      height={size}
      onClick={onClick}
      role={role}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7l5 5l5 -5" />
      <path d="M7 13l5 5l5 -5" />
    </svg>
  );
}

ChevronsDownIcon.propTypes = {
  arialLabel: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  role: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
