import PropTypes from "prop-types";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export const Cards = ({ label, onClick, type, className }) => {
  return (
    <Card
      className={`bg-sky-900 text-white font-bold py-2 px-4 rounded block ${className}`}
      onClick={onClick}
      type={type}
      size="sm"
      imgSrc="/assets/img/logo.png"
    >
      <Link to="/CardDetails">{label}</Link>
    </Card>
  );
};

Cards.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string, // Añadir esta línea para aceptar className como prop
};

Cards.defaultProps = {
  className: "",
};
