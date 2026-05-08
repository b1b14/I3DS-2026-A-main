import style from "./Header.module.css";
import Logo from "../../assets/logo.png";

const Header = ({ onLoginClick }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="" width="60px" />
        <h1>DevSteam</h1>
      </div>

      <input type="text" placeholder="Buscar" className="search" />

      <div className="cart-icon" style={{ fontSize: "40px" }}>🛒</div>
      <button className="btn btn-primary px-4 py-2 fw-bold" type="button" onClick={onLoginClick}>
        Login
      </button>
    </header>
  );
}
export default Header;
