import { useState } from "react";

export const useCardSelection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const selectCard = (card) => {
    setSelectedCard(card);
  };

  const resetCardSelection = () => {
    setSelectedCard(null);
  };

  return {
    selectedCard,
    selectCard,
    resetCardSelection,
  };
};
