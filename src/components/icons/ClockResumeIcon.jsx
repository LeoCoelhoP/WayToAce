import React from "react";
import PropTypes from "prop-types";

export default function ClockResumeIcon({
  className = "",
  onClick,
  size = 24,
}) {
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
      <path d="M12 7v5l2 2" />
      <path d="M17 22l5 -3l-5 -3z" />
      <path d="M13.017 20.943a9 9 0 1 1 7.831 -7.292" />
    </svg>
  );
}
ClockResumeIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
