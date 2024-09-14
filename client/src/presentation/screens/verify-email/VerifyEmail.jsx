import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Modal, Spinner } from "flowbite-react";

export const VerifyEmail = () => {
  const { id, hash } = useParams(); // Capturamos los parámetros de la URL
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para el spinner

  const handleVerifyEmail = async () => {
    setIsLoading(true); // Activar el spinner
    try {
      // Hacemos la solicitud GET para verificar el correo
      const response = await axios.get(
        `http://127.0.0.1:8000/api/email/verify/${id}/${hash}`
      );
      console.log("Respuesta del servidor:", response); // Mostrar respuesta
      setModalMessage("¡Bienvenido a VITRINA! Verificación exitosa.");
      setIsSuccess(true);
      setIsModalOpen(true);

      // Redirigir después de 5 segundos
      setTimeout(() => {
        window.close();
      }, 5000);
    } catch (error) {
      console.error("Error en la verificación:", error.response || error); // Mostrar el error completo
      setModalMessage(
        "La verificación ha fallado. El enlace no es válido o ha expirado."
      );
      setIsSuccess(false);
      setIsModalOpen(true);
    } finally {
      setIsLoading(false); // Desactivar el spinner
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-fondo rounded-lg shadow-md text-center">
        <h2 className="text-5xl font-semibold mb-6 text-white">
          Verificación de correo
        </h2>
        {isLoading ? (
          <Spinner size="xl" aria-label="Cargando..." className="mb-6" />
        ) : (
          <Button
            onClick={handleVerifyEmail}
            className="w-full justify-center !bg-accent !text-black !hover:bg-black !hover:text-accent !border-accent !border !rounded-lg !hover:scale-105 transition-all duration-300"
          >
            Verificar mi correo
          </Button>
        )}
      </div>

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>{isSuccess ? "Éxito" : "Error"}</Modal.Header>
        <Modal.Body>
          <p>{modalMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="!bg-accent !text-black !hover:bg-black !hover:text-accent !border-accent !border !rounded-lg !hover:scale-105 transition-all duration-300"
            onClick={() => setIsModalOpen(false)}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
