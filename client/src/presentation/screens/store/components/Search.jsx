import PropTypes from "prop-types";
import React from "react";

export const Search = ({ className, search = "search-01.svg" }) => {
  return <img className={`absolute w-6 h-6 top-0 left-0 ${className}`} alt="Search" src={search} />;
};

Search.propTypes = {
  search: PropTypes.string,
};