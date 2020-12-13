import { useState, useEffect } from "react";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import defaultAvatar from "../images/avatar.png";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "Name", about: "Description", avatar: defaultAvatar });

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

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

  const [isLoding, setIsLoding] = useState(false);
  const handleBtnClick = () => {
    setIsLoding(true);
  };

  const handleUpdateUser = (updateInfo) => {
    api
      .updateUserInfo(updateInfo)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoding(false));
  };

  const handleUpdateAvatar = (avatarLink, e) => {
    api
      .editAvatar(avatarLink)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoding(false);
        e.target.reset();
      });
  };

  return (
    <div className="page__container">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          userInfo={currentUser}
          onUpdateUser={handleUpdateUser}
          isFormLoding={isLoding}
          onBtnClick={handleBtnClick}
        />

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

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isFormLoding={isLoding}
          onBtnClick={handleBtnClick}
        />

        <PopupWithForm name="deleteForm" title="Вы уверены?" btn="Да" />

        <ImagePopup name="zoomed" card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
