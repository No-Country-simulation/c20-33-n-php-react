import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { CardDetails } from "./CardDetails";
import { useCardSelection } from "../../hook/useCardSelection";

export const CardsScreen = ({ cardsData }) => {
  const { selectedCard, selectCard, resetCardSelection } = useCardSelection();

  return (
    <div>
      {!selectedCard ? (
        <CardGroup>
          {cardsData.map((card, index) => (
            <Card key={index} onClick={() => selectCard(card)}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      ) : (
        <div>
          <CardDetails card={selectedCard} />
          <button onClick={resetCardSelection}>Back to Cards</button>
        </div>
      )}
    </div>
  );
};
