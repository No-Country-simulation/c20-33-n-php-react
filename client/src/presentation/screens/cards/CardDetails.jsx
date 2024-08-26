export const CardDetails = ({ card }) => {
  return (
    <div>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      <img src={card.image} alt={card.title} />
    </div>
  );
};
