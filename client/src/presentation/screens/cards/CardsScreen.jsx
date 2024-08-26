import Card from "react-bootstrap/Card";
import { CardDetails } from "./CardDetails";
import { useCardSelection } from "../../hook/useCardSelection";
import "../../../assets/css/cardscreen.css";

export const CardsScreen = ({ cardsData }) => {
  const { selectedCard, selectCard, resetCardSelection } = useCardSelection();

  return (
    <div>
      {!selectedCard ? (
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <Card key={index} className="card" onClick={() => selectCard(card)}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <CardDetails card={selectedCard} />
          <button onClick={resetCardSelection}>Back to Cards</button>
        </div>
      )}
    </div>
  );
};
