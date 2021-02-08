import { useEffect } from "react";

function Login({ isRendered }) {
  useEffect(() => {
    isRendered("Login");
  }, [isRendered]);

  return (
    <form className="form form_type_auth">
      <h2 className="form__title form__title_type_auth">Вход</h2>
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
        Войти
      </button>
    </form>
  );
}

export default Login;
