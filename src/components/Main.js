import defaultAvatar from '../images/avatar.png';

function Main() {

  const handleEditAvatarClick = () => {

  }

  const handleEditProfileClick = () => {

  }

  const handleAddPlaceClick = () => {

  }

  return (
    <main className="content page__main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__shading">
            <button className="profile__avatar-btn" type="button" aria-label="Кнопка - редактировать аватар"></button>
          </div>
          <img className="profile__avatar" src={defaultAvatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__box">
            <h1 className="profile__name">Name</h1>
            <button className="profile__edit-button" type="button" aria-label="Кнопка редактирования"></button>
          </div>
          <p className="profile__job">Description</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Кнопка - добавить"></button>
      </section>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  )
}

export default Main;