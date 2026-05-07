import  "./Header.module.css";

 function Header() {
  return (
    <header className="header">
      <div className="logo">
        
        <h1>DevSteam</h1>
      </div>

      <input type="text" placeholder="Buscar" className="search" />

      <div className="cart-icon">
        🛒
      </div>
    </header>
  );

}
export default Header