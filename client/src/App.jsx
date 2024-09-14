import { Footer } from "./presentation/components/Footer";
import { Header } from "./presentation/components/Header";
import { AppRoutes } from "./presentation/routes/AppRoutes";
import "flowbite/dist/flowbite.css";


export const App = () => {
  return (
    <div className="bg-gradientPrimary  min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};
