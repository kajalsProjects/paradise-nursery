import "./Navbar.css";
import logoImg from "./images/logo.png";
import cartImg from "./images/cart.png";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img className="logo-image" src={logoImg} alt="logo-Image" />
      </div>
      <div className="logo-text">
        <h1>Paradise Nursery</h1>
        <p>
          <i>Where Every Plants Tells a Story!</i>
        </p>
      </div>
      <div className="header-text">
        <h2>Plants</h2>
      </div>
      <div className="shopping-cart">
        <img className="cart-icon" src={cartImg} alt="cart-Icon" />
      </div>
    </div>
  );
}

export default Navbar;
