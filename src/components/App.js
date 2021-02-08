import { useState, useEffect, useCallback } from "react";
import { Switch, Route } from "react-router-dom";
import { api } from "../utils/api";
import { setBtnName } from "../utils/utils";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import defaultAvatar from "../images/avatar.png";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmPopup from "./ConfirmPopup";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";

function App() {
  const [mountedComponent, setMountedComponent] = useState("");
  const specifyMountedComponent = useCallback(
    (name) => {
      setMountedComponent(name);
    },
    [setMountedComponent]
  );

  const [currentUser, setCurrentUser] = useState({ name: "Name", about: "Description", avatar: defaultAvatar });
  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddPlaceSubmit = (card, e) => {
    api
      .addNewCard(card)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
        e.target.reset();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((i) => (i._id === card._id ? newCard : i));
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  };

  const [cardForDelete, setCardForDelete] = useState({});
  const handleCardDelete = (card) => {
    setCardForDelete(card);
    handleCardDeleteClick();
  };

  const handleCardDeleteConfirm = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((i) => !(i._id === card._id));
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

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

  const [isPopupWithConfirmOpen, setIsPopupWithConfirmOpen] = useState(false);
  const handleCardDeleteClick = () => {
    setIsPopupWithConfirmOpen(true);
  };

  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(true);
  const [isSuccessfulReg, setIsSuccessfulReg] = useState(false);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsPopupWithConfirmOpen(false);
    setIsInfoToolTipOpen(false);
  };

  const [isLoading, setIsLoading] = useState(false);
  const handleBtnLoading = () => {
    setIsLoading(true);
  };

  const handleUpdateUser = (updateInfo) => {
    api
      .updateUserInfo(updateInfo)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const handleUpdateAvatar = (avatarLink, e) => {
    api
      .editAvatar(avatarLink)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
        e.target.reset();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="page__container">
      <CurrentUserContext.Provider value={currentUser}>
        <Header btnName={setBtnName(mountedComponent)} />
        <Switch>
          <Route path="/sign-in">
            <Login isRendered={specifyMountedComponent} />
          </Route>
          <Route path="/sign-up">
            <Register isRendered={specifyMountedComponent} />
          </Route>
          <ProtectedRoute
            component={Main}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
            cards={cards}
            isRendered={specifyMountedComponent}
          />
        </Switch>
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          userInfo={currentUser}
          onUpdateUser={handleUpdateUser}
          isFormLoading={isLoading}
          onBtnLoading={handleBtnLoading}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isFormLoading={isLoading}
          onBtnLoading={handleBtnLoading}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isFormLoading={isLoading}
          onBtnLoading={handleBtnLoading}
        />
        <ConfirmPopup
          isOpen={isPopupWithConfirmOpen}
          onClose={closeAllPopups}
          onCardClickDelete={handleCardDeleteConfirm}
          card={cardForDelete}
        />
        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
        <InfoTooltip
          isOpen={isInfoToolTipOpen}
          onClose={closeAllPopups}
          isSucceeding={isSuccessfulReg}
          message={
            (isSuccessfulReg && "Вы успешно \n зарегистрировались!") || "Что-то пошло не так! \n Попробуйте ещё раз."
          }
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
