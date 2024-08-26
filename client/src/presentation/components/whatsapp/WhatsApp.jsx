import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../../../public/img/logo3.jpeg";

export default function WhatsApp() {
  return (
    <FloatingWhatsApp
      phoneNumber="+56947637541"
      accountName="Manos de América"
      statusMessage="Contestamos a la brevedad"
      avatar={logo}
      chatMessage="Hola, Bienvenido a Manos de América, somos artesanos de todas las regiones latinoamericanas."
      notificationBody="Hola, necesito ayuda."
      notificationTitle="Manos de América"
    />
  );
}
