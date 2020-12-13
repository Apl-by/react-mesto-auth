import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isFormLoding, onBtnClick }) {
  const avatarLink = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onBtnClick();
    onUpdateAvatar(avatarLink.current.value, e);
  };

  return (
    <PopupWithForm
      name="avatarForm"
      title="Обновить аватар"
      btn={isFormLoding ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__field">
        <input
          className="form__input"
          id="link-input"
          type="url"
          name="link"
          ref={avatarLink}
          placeholder="Ссылка на картинку"
          required
        />
        <span className="form__input-error" id="link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
