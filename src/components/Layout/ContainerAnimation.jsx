import React from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

export default function ContainerAnimation({
  animate = {},
  children,
  className = "",
  condition = false,
  exit = {},
  initial = {},
}) {
  return (
    <AnimatePresence>
      {condition && (
        <motion.div
          animate={animate}
          className={className}
          initial={initial}
          exit={exit}
          transition={{ bounce: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ContainerAnimation.propTypes = {
  animate: PropTypes.shape({
    opacity: PropTypes.number,
    y: PropTypes.number,
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  className: PropTypes.string,
  condition: PropTypes.bool,
  exit: PropTypes.shape({
    opacity: PropTypes.number,
    y: PropTypes.number,
  }),
  initial: PropTypes.shape({
    opacity: PropTypes.number,
    y: PropTypes.number,
  }),
};
