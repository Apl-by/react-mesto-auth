

function PopupWithForm({ name, title, btn, children, isOpen }) {


  return (
    <div className={`popup ${isOpen && 'popup_opened'} popup_form_${name}`}>
      <form className="form popup__form" name={name} noValidate>
        <h2 className="form__title form__title_size_s">{title}</h2>
        {children}
        <button className="form__submit form__submit_size_s" type="submit">{btn}</button>
        <button className="form__close" type="button" aria-label="Закрыть окно"></button>
      </form>
    </div>
  );
}

export default PopupWithForm;