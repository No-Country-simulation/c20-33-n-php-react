import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserLarge } from "react-icons/fa6";
import { useAuth } from "../../hooks/useAuth";
import { SideBag } from "../../components/SideBag";
import { Button, Modal } from "react-bootstrap";

const InputField = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  required,
  error,
  icon: Icon,
}) => (
  <div className="mb-4">
    <div className="flex items-center">
      {Icon && <Icon className="absolute ml-2 text-grey" />}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`pl-10 w-full bg-transparent border-b-2 ${
          error ? "border-b-warning" : "border-b-white"
        } text-white placeholder-grey focus:outline-none`}
      />
    </div>
    {error && <span className="text-warning text-sm">{error}</span>}
  </div>
);

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

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        formData
      );

      if (response?.data?.success && response?.data?.data) {
        login(response.data.data);

        setModalMessage("Login exitoso. Serás redirigido en 5 segundos...");
        setIsSuccess(true);
        setIsModalOpen(true);

        setFormData({
          email: "",
          password: "",
        });

        setTimeout(() => {
          navigate("/profile");
        }, 5000);
      } else {
        throw new Error("Respuesta inesperada del servidor");
      }
    } catch (error) {
      setErrors(error.response?.data?.errors || {});
      setModalMessage(
        "Error en el login. Por favor, revisa los campos e intenta nuevamente."
      );
      setIsSuccess(false);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen flex-row-reverse">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-fondo rounded-lg shadow-md"
        >
          <h2 className="text-7xl font-semibold mb-6 text-center text-white">
            Vitrina
          </h2>
          <h3 className="text-xl font-semibold mb-4 text-center text-white">
            Tu tienda online <br /> podés verlo, podés comprarlo
          </h3>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                border: "1px solid white",
                borderRadius: "50%",
                padding: "18px",
              }}
            >
              <FaUserLarge size={50} color="#c0dcfd" />
            </div>
          </div>

          <br />

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

          <Button
            type="submit"
            className="w-full mt-4 !bg-accent text-black hover:!bg-grey hover:text-black"
          >
            Iniciar Sesión
          </Button>

          <p className="text-center mt-4">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="text-accent hover:underline">
              Regístrate
            </Link>
          </p>

          <p className="text-center mt-4">
            ¿Olvidaste tu contraseña?{" "}
            <Link to="/forgot-password" className="text-accent hover:underline">
              Restablecer contraseña
            </Link>
          </p>
        </form>

        <SideBag />

        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Modal.Header>{isSuccess ? "Éxito" : "Error"}</Modal.Header>
          <Modal.Body>
            <p>{modalMessage}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="!bg-accent text-black hover:!bg-grey hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
