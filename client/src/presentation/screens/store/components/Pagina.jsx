import PropTypes from "prop-types";
import React from "react";

export const Pagina = ({ className, categorAsClassName, text = "Página inicio", arrowDown }) => {
  return (
    <div className={`inline-flex items-center gap-16 relative ${className}`}>
      <div
        className={`relative w-fit mt-[-1.00px] [font-family:'Raleway-Bold',Helvetica] font-bold text-off-white text-sm tracking-[0] leading-[normal] whitespace-nowrap ${categorAsClassName}`}
      >
        {text}
      </div>
      <div className="relative w-px h-px">
        <img src={arrowDown} alt="Arrow down" />
      </div>
    </div>
  );
};

Pagina.propTypes = {
  text: PropTypes.string,
  arrowDown: PropTypes.string,
};