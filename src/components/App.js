import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  return (
    <div className="page__container">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm name="editForm" title="Редактировать профиль" btn="Сохранить">
        <label className="form__field">
          <input className="form__input" id="nickname-input" type="text" name="name" autoComplete="off" minLength="2"
            maxLength="40" required />
          <span className="form__input-error" id="nickname-input-error"></span>
        </label>
        <label className="form__field">
          <input className="form__input" id="job-input" type="text" name="about" autoComplete="off" minLength="2"
            maxLength="200" required />
          <span className="form__input-error" id="job-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="addForm" title="Новое место" btn="Создать" isOpen={true}>
        <label className="form__field">
          <input className="form__input" id="place-input" type="text" name="name" placeholder="Название" autoComplete="off"
            minLength="2" maxLength="30" required />
          <span className="form__input-error" id="place-input-error"></span>
        </label>
        <label className="form__field">
          <input className="form__input" id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className="form__input-error" id="link-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="avatarForm" title="Обновить аватар" btn="Сохранить">
        <label className="form__field">
          <input className="form__input" id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className="form__input-error" id="link-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="deleteForm" title="Вы уверены?" btn="Да" />
      <ImagePopup />

      {/*    
      <template className="js-card-template">
        <li className="card">
          <img src="#" alt="" className="card__img" />
          <div className="card__sign">
            <h2 className="card__title"></h2>
            <div className="card__container">
              <button className="card__button" type="button" aria-label="Кнопка - нравится"></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
          <button className="card__recycle" type="button" aria-label="Кнопка - удалить"></button>
        </li>
      </template> */}

    </div>
  );
}

export default App;
