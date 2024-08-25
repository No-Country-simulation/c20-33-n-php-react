import { Header } from "./presentation/components/Header";
import { Menu } from "./presentation/components/Menu";
import { AppRoutes } from "./routes/AppRoutes";
import { WhatsApp } from "./presentation/components/WhatsApp";

export const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <AppRoutes />
      <WhatsApp />
    </>
  );
};
