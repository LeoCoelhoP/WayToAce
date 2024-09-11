import React from "react";
import PropTypes from "prop-types";

export default function Banner({
  imgSrc = "",
  bannerText = "",
  className = "",
}) {
  return (
    <div
      className={` flex h-[180px] w-full z-20 bg-transparent md:rounded-md ${className}  bg-gradient-to-br from-white dark:to-zinc-800 dark:from-zinc-400 to-zinc-300`}
    >
      <span className="relative flex items-center justify-center w-full h-full mx-auto">
        <p className="absolute z-20 w-2/3 p-4 mx-auto text-lg font-bold text-center text-black dark:text-white lg:text-3xl ">
          {bannerText}
        </p>
      </span>
    </div>
  );
}

Banner.propTypes = {
  imgSrc: PropTypes.string,
  bannerText: PropTypes.string,
  className: PropTypes.string,
};
