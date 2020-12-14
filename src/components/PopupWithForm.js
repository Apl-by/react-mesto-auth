import { useRef } from "react";

function PopupWithForm({ name, title, btn, children, isOpen, onClose, onSubmit, setPrevParams }) {
  // для доступа к методу reset() формы, при закрытии не через submit
  const form = useRef();

  const closeOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      name === "editForm" ? setPrevParams() : form.current.reset();
    }
  };

  return (
    <div className={`popup ${isOpen && "popup_opened"} popup_form_${name}`} onClick={closeOnOverlay}>
      <form className="form popup__form" onSubmit={onSubmit} name={name} noValidate ref={form}>
        <h2 className="form__title form__title_size_s">{title}</h2>
        {children}
        <button className="form__submit form__submit_size_s" type="submit" onSubmit={onSubmit}>
          {btn}
        </button>
        <button
          className="form__close"
          type="button"
          aria-label="Закрыть окно"
          onClick={() => {
            onClose();
            name === "editForm" ? setPrevParams() : form.current.reset();
          }}
        ></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
