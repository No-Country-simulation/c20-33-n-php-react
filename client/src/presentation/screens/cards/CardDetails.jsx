import "../../../assets/css/cardDetails.css";

export const CardDetails = ({ card }) => {
  return (
    <div className="card-details-container">
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      <img src={card.image} alt={card.title} />
    </div>
  );
};
