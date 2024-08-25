import { TabsButtons } from "../tabs/TabsButtons";
import { OffCanvas } from "./OffCanvas";
import "../../assets/css/menu.css";
export const Menu = () => {
  return (
    <div className="menu">
      <OffCanvas />
      <TabsButtons label="Ofertas" />
      <TabsButtons label="Novedades" />
      <TabsButtons label="Destacados" />
    </div>
  );
};
