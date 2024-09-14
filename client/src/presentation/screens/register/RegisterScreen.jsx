import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaPhone, FaIdCard, FaEnvelope, FaLock } from "react-icons/fa";
import { SideBag } from "../../components/SideBag";
import { TiGroupOutline } from "react-icons/ti";

// Componente reutilizable para los campos del formulario
const InputField = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  required,
  error,
  icon: Icon,
}) => {
  const handleKeyDown = (e) => {
    if (type === "number" && (e.key === "-" || e.key === "e")) {
      e.preventDefault(); // Prevenir números negativos y la entrada de notación científica
    }
  };

  return (
    <div className="mb-6 relative">
      <div className="flex items-center">
        {Icon && <Icon className="absolute ml-2 text-grey" />}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          required={required}
          className={`pl-10 w-full bg-transparent border-b-2 ${
            error ? "border-b-warning" : "border-b-grey"
          } text-white placeholder-grey focus:outline-none focus:border-b-accent transition-colors duration-300`}
        />
      </div>
      {error && <span className="text-warning text-sm">{error}</span>}
    </div>
  );
};

// Validación de los props
InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
  icon: PropTypes.elementType,
};

// Valores por defecto para los props opcionales
InputField.defaultProps = {
  placeholder: "",
  required: true,
  error: "",
  icon: null,
};

export const RegisterScreen = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    ci: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = "Las contraseñas no coinciden";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setModalMessage("Hay errores en el formulario. Por favor corrígelos.");
      setIsSuccess(false);
      setIsModalOpen(true);
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/register", formData);
      setModalMessage("Registro exitoso. Serás redirigido en 5 segundos...");
      setIsSuccess(true);
      setIsModalOpen(true);
      setFormData({
        name: "",
        surname: "",
        phone: "",
        ci: "",
        email: "",
        password: "",
        password_confirmation: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      setErrors(error.response.data.errors || {});
      setModalMessage(
        "Error en el registro. Por favor, revisa los campos e intenta nuevamente."
      );
      setIsSuccess(false);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-fondo rounded-lg shadow-md"
      >
        <h2 className="text-5xl font-semibold mb-6 text-center text-white">
          VITRINA
        </h2>

        <h4 className="text-xl font-semibold mb-4  text-center  text-white">
          Tu tienda online podés verlo, <br /> podés comprarlo
        </h4>

        <InputField
          id="name"
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          icon={FaUser}
        />
        <InputField
          id="surname"
          type="text"
          placeholder="Apellido"
          value={formData.surname}
          onChange={handleChange}
          error={errors.surname}
          icon={FaUser}
        />
        <InputField
          id="phone"
          type="number"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          icon={FaPhone}
        />
        <InputField
          id="ci"
          type="text"
          placeholder="Cédula"
          value={formData.ci}
          onChange={handleChange}
          error={errors.ci}
          icon={FaIdCard}
        />
        <InputField
          id="email"
          type="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          icon={FaEnvelope}
        />
        <InputField
          id="password"
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          icon={FaLock}
        />
        <InputField
          id="password_confirmation"
          type="password"
          placeholder="Confirmar contraseña"
          value={formData.password_confirmation}
          onChange={handleChange}
          error={errors.password_confirmation}
          icon={FaLock}
        />

        <Button
          type="submit"
          className="w-full mt-4 !bg-accent text-black hover:!bg-grey hover:text-black"
        >
          Registrar
        </Button>

        <Link
          to="/login"
          className="block text-center mt-4 text-white hover:text-accent"
        >
          ¿Ya tienes una cuenta? Iniciar sesión
        </Link>
        <div className="flex justify-center mt-4">
          <TiGroupOutline className="text-white text-2xl mr-2" />
        </div>
      </form>

      <SideBag />

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>{isSuccess ? "Éxito" : "Error"}</Modal.Header>
        <Modal.Body>
          <p>{modalMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="!bg-accent !text-black !hover:bg-black !hover:text-accent !border-accent !border !rounded-lg !hover:scale-105 transition-all duration-300" onClick={() => setIsModalOpen(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// CSS global para inputs tipo número (elimina las flechas)
import "./App.css";
