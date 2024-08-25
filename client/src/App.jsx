import { Header } from "./presentation/components/Header";
import { Menu } from "./presentation/components/Menu";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <AppRoutes />
    </>
  );
};
