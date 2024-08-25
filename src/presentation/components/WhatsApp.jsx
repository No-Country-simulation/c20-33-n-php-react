import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../../public/img/logo3.jpeg";

export const WhatsApp = () => {
  return (
    <>
      <FloatingWhatsApp
        phone="+56947637541"
        statusMessage="Respondemos en 15 minutos"
        accountName="Manos de America"
        avatar={logo}
        chatMessage="Hola! ¿En qué podemos ayudarte?"
        darkMode={false}
        placeholder="Escribir mensaje..."
        notifications={true}
      />
    </>
  );
};
