export const setBtnName = (component) => {
  const btnName =
    component === "Login"
      ? "Регистрация"
      : component === "Register"
      ? "Войти"
      : component === "Main"
      ? "Выйти"
      : "Войти";
  return btnName;
};
