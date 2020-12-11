function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      <img src={card.link} alt={card.name} className="card__img" onClick={handleClick} />
      <div className="card__sign">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__container">
          <button className="card__button" type="button" aria-label="Кнопка - нравится"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button className="card__recycle" type="button" aria-label="Кнопка - удалить"></button>
    </li>
  );
}

export default Card;
