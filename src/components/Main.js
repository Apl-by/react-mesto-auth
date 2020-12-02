import { useState, useEffect } from "react";
import defaultAvatar from '../images/avatar.png';
import { api } from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = useState('Name');
  const [userDescription, setUserDescription] = useState('Description');
  const [userAvatar, setUserAvatar] = useState(defaultAvatar);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        const cards = res.map((item) => {
          return (
            <Card card={item} key={item._id} onCardClick={onCardClick} />
          );
        })
        setCards(cards);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <main className="content page__main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__shading">
            <button className="profile__avatar-btn" type="button" aria-label="Кнопка - редактировать аватар"
              onClick={onEditAvatar}></button>
          </div>
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__box">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" aria-label="Кнопка редактирования"
              onClick={onEditProfile}></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Кнопка - добавить"
          onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__list">{cards}</ul>
      </section>
    </main>
  )
}

export default Main;