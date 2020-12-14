import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isFormLoding, onBtnLoding }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
  // при закрытии попапа не через submit верну в поля ввода исходные значения
  const [prevUserParams, setPrevUserParams] = useState({ name: "", about: "" });
  const handlerPrevParams = () => {
    setPrevUserParams({ name: name, about: description });
  };

  const handlerUserParams = () => {
    setName(prevUserParams.name);
    setDescription(prevUserParams.about);
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleChangeName = (e) => {
    if (!prevUserParams.name) {
      handlerPrevParams();
    }
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    if (!prevUserParams.about) {
      handlerPrevParams();
    }
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBtnLoding();
    onUpdateUser({
      name: name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      name="editForm"
      title="Редактировать профиль"
      btn={isFormLoding ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      setPrevParams={handlerUserParams}
    >
      <label className="form__field">
        <input
          className="form__input"
          id="nickname-input"
          onChange={handleChangeName}
          value={name}
          type="text"
          name="name"
          autoComplete="off"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error" id="nickname-input-error"></span>
      </label>
      <label className="form__field">
        <input
          className="form__input"
          id="job-input"
          onChange={handleChangeDescription}
          value={description}
          type="text"
          name="about"
          autoComplete="off"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__input-error" id="job-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
