import logo from "../images/logo.svg";

function Header({ btnName, loggedIn }) {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className="header__account">
        {loggedIn && <span className="header__login">login</span>}
        <button className="header__auth-btn" type="button">
          {btnName}
        </button>
      </div>
    </header>
  );
}

export default Header;
