import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function AddPlacePopup({ isOpen, onClose, isFormLoding, onBtnLoding, onAddPlace }) {
  const name = useRef();
  const link = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onBtnLoding();
    onAddPlace(
      {
        name: name.current.value,
        link: link.current.value,
      },
      e
    );
  };

  return (
    <PopupWithForm
      name="addForm"
      title="Новое место"
      onSubmit={handleSubmit}
      btn={isFormLoding ? "Создание..." : "Создать"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="form__field">
        <input
          className="form__input"
          id="place-input"
          type="text"
          name="name"
          ref={name}
          placeholder="Название"
          autoComplete="off"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__input-error" id="place-input-error"></span>
      </label>
      <label className="form__field">
        <input
          className="form__input"
          id="link-input"
          type="url"
          name="link"
          ref={link}
          placeholder="Ссылка на картинку"
          required
        />
        <span className="form__input-error" id="link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
