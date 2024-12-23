import "./Cart.css";
import Navbar from "./Navbar";
import plantImg4 from "./images/peacelily.jpg";

function Cart() {
  return (
    <div className="shopping-cart-page">
      <Navbar />

      <div className="cart">
        <div className="cart-items">
          <div className="cart-item-image">
            <img className="product-image" src={plantImg4} alt="Peace Lily" />
          </div>
          <div className="cart-item-details">
            <h3>Peace Lily</h3>
            <span>$18</span>
            <div className="qty-btn-container">
              <button className="inc-btn">+</button>
              <span className="num-of-items">2</span>
              <button className="dec-btn">-</button>
            </div>
            <span className="total-cost">Total:$35</span>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      </div>

      <div className="cta-container">
        <button className="continue-btn">Continue Shopping</button>
        <br />
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
