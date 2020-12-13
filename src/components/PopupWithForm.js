function PopupWithForm({ name, title, btn, children, isOpen, onClose, onSubmit }) {
  const closeOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  return (
    <div className={`popup ${isOpen && "popup_opened"} popup_form_${name}`} onClick={closeOnOverlay}>
      <form className="form popup__form" onSubmit={onSubmit} name={name} noValidate>
        <h2 className="form__title form__title_size_s">{title}</h2>
        {children}
        <button className="form__submit form__submit_size_s" type="submit" onSubmit={onSubmit}>
          {btn}
        </button>
        <button className="form__close" type="button" aria-label="Закрыть окно" onClick={onClose}></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
