import PropTypes from "prop-types";
import React from "react";

export const ArrowDown = ({ className, arrowDown = "arrow-down-01.svg" }) => {
  return <img className={`absolute w-6 h-6 top-0 left-0 ${className}`} alt="Arrow down" src={arrowDown} />;
};

ArrowDown.propTypes = {
  arrowDown: PropTypes.string,
};