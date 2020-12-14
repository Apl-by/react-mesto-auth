function PopupWithConfirm({ name, title, btn, isOpen, onClose, card, onCardClickDelete }) {
  const closeOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCardClickDelete(card);
  };

  return (
    <div className={`popup ${isOpen && "popup_opened"} popup_form_${name}`} onClick={closeOnOverlay}>
      <form className="form popup__form" name={name} onSubmit={handleSubmit} noValidate>
        <h2 className="form__title form__title_size_s">{title}</h2>
        <button className="form__submit form__submit_size_s" type="submit">
          {btn}
        </button>
        <button className="form__close" type="button" aria-label="Закрыть окно" onClick={onClose}></button>
      </form>
    </div>
  );
}

export default PopupWithConfirm;
