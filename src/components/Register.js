import { useEffect } from "react";

function Register({ isRendered }) {
  useEffect(() => {
    isRendered("Register");
  }, [isRendered]);

  return (
    <form className="form form_type_auth">
      <h2 className="form__title form__title_type_auth">Регистрация</h2>
      <label className="form__field form__field_type_auth">
        <input
          className="form__input form__input_type_auth"
          type="email"
          name="email"
          placeholder="Email"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error"></span>
      </label>
      <label className="form__field">
        <input
          className="form__input form__input_type_auth"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <span className="form__input-error"></span>
      </label>
      <button className="form__submit form__submit_type_auth" type="submit">
        Зарегистрироваться
      </button>
      <button className="form__redirect" type="button">
        Уже зарегистрированы? Войти
      </button>
    </form>
  );
}

export default Register;
