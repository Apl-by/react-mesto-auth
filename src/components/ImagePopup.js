function ImagePopup({ card, isOpen, onClose }) {

  const closeOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget)
      onClose()
  }

  return (
    <div className={`popup ${isOpen && 'popup_opened'} popup_zoomed`} onClick={closeOnOverlay}>
      <div className="zoom">
        {/* При первичном рендере консоль ругается на card.link как некорректный, т.к. он ещё не имеет значения */}
        <img src={card ? card.link : "#"} alt={card.name} className="zoom__img" />
        <p className="zoom__text">{card.name}</p>
        <button className="zoom__close" type="button" aria-label="Закрыть изображение" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;