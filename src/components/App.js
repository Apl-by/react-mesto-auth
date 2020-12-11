import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "#", link: "" });
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  };

  return (
    <div className="page__container">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="editForm"
        title="Редактировать профиль"
        btn="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__field">
          <input
            className="form__input"
            id="nickname-input"
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

      <PopupWithForm
        name="addForm"
        title="Новое место"
        btn="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__field">
          <input
            className="form__input"
            id="place-input"
            type="text"
            name="name"
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
            placeholder="Ссылка на картинку"
            required
          />
          <span className="form__input-error" id="link-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="avatarForm"
        title="Обновить аватар"
        btn="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__field">
          <input
            className="form__input"
            id="link-input"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="form__input-error" id="link-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="deleteForm" title="Вы уверены?" btn="Да" />

      <ImagePopup name="zoomed" card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
