import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      <img src={card.link} alt={card.name} className="card__img" onClick={handleClick} />
      <div className="card__sign">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__container">
          <button
            className={`card__button ${isLiked && "card__button_active"}`}
            type="button"
            aria-label="Кнопка - нравится"
            onClick={handleLikeClick}
          ></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
      {isOwn && (
        <button
          className="card__recycle"
          onClick={handleDeleteClick}
          type="button"
          aria-label="Кнопка - удалить"
        ></button>
      )}
    </li>
  );
}

export default Card;
