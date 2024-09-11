import React from "react";
import PropTypes from "prop-types";

export default function LogOutIcon({
  className = "",
  onClick = null,
  size = 24,
}) {
  return (
    <svg
      className={className}
      fill="none"
      height={size}
      onClick={onClick}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
      <path d="M9 12h12l-3 -3" />
      <path d="M18 15l3 -3" />
    </svg>
  );
}

LogOutIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
