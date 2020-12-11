function ImagePopup({ name, card, isOpen, onClose }) {
  const closeOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  return (
    <div className={`popup ${isOpen && "popup_opened"} popup_${name}`} onClick={closeOnOverlay}>
      <div className="zoom">
        <img src={card.link} alt={card.name} className="zoom__img" />
        <p className="zoom__text">{card.name}</p>
        <button className="zoom__close" type="button" aria-label="Закрыть изображение" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
