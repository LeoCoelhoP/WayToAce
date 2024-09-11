import React from "react";
import PropTypes from "prop-types";

export default function MicrosoftIcon({
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
      viewBox="0 0 48 48"
    >
      <path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)" />
      <path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)" />
      <path
        fill="#ffc107"
        d="M26 26H42V42H26z"
        transform="rotate(-180 34 34)"
      />
      <path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)" />
    </svg>
  );
}

MicrosoftIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
