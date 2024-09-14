import PropTypes from "prop-types";

export const Buttons = ({ label, onClick, type, className }) => {
  return (
    <button
      className={`${className}`} // Se aplica la clase que recibimos como prop
      onClick={onClick} // Se ejecuta la función onClick cuando se hace clic
      type={type} // Define el tipo del botón (button, submit, reset)
    >
      {label}
    </button>
  );
};

Buttons.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired, // Acepta string o elemento como ícono
  onClick: PropTypes.func, // Ya no es requerido, puede ser opcional
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired, // El tipo de botón es obligatorio
  className: PropTypes.string, // La clase CSS es opcional
};

// Valor por defecto para la prop onClick
Buttons.defaultProps = {
  onClick: () => {}, // Función vacía si no se pasa onClick
};
