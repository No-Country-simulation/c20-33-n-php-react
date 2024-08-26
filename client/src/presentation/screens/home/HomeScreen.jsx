import { CarouselApp } from "../../components/carousel/CarouselApp";
import { CardsScreen } from "../cards/CardsScreen";
import "../../../assets/css/home.css";
import { RedesSociales } from "../../components/RedesSociales";

export const HomeScreen = () => {
  // Datos para las cards
  const cardsData = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      image: "../../../../public/img/logo2.jpeg",
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      image: "../../../../public/img/logo3.jpeg",
    },
    // Añade más cards aquí según lo necesites
  ];

  return (
    <>
      <section className="home-section">
        <CarouselApp />
      </section>
      <section className="home-section">
        <RedesSociales />
      </section>
      <section className="home-section">
        <CardsScreen cardsData={cardsData} />
      </section>
    </>
  );
};
