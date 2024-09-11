import React from "react";
import PropTypes from "prop-types";

export default function AlertIcon({ className = "", onClick, size = 24 }) {
  return (
    <svg
      className={`${className} cursor-pointer`}
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
      <path d="M12 9v4" />
      <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
      <path d="M12 16h.01" />
    </svg>
  );
}
AlertIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
