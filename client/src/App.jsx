import { Footer } from "./presentation/components/Footer";
import { Header } from "./presentation/components/Header";
import { Menu } from "./presentation/components/Menu";
import WhattsApp from "./presentation/components/whatsapp/WhatsApp";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <AppRoutes />
      <WhattsApp />
      <Footer />
    </>
  );
};
