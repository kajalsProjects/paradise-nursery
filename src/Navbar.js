import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logoImg from "./images/logo.png";
import cartImg from "./images/cart.png";

function Navbar() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/cartpage");
  };

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
        <img
          className="cart-icon"
          src={cartImg}
          alt="cart-Icon"
          onClick={handleGetStartedClick}
        />
      </div>
    </div>
  );
}

export default Navbar;
