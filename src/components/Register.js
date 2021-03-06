import { useState, useEffect } from "react";

function Register({ isRendered, history, onSignUp }) {
  const [registrationData, setRegistrationData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(registrationData);
  };

  useEffect(() => {
    isRendered("Register");
  }, [isRendered]);

  const handleClick = () => {
    history.push("/signin");
  };

  return (
    <form className="form form_type_auth" onSubmit={handleSubmit} noValidate>
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
        <span className="form__input-error"></span>
      </label>
      <button className="form__submit form__submit_type_auth" type="submit">
        Зарегистрироваться
      </button>
      <button className="form__redirect" type="button" onClick={handleClick}>
        Уже зарегистрированы? Войти
      </button>
    </form>
  );
}

export default Register;
