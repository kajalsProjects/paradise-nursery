import "./ProductGridwall.css";
import Navbar from "./Navbar";
import plantImg from "./images/snake-plant.jpg";
import plantImg2 from "./images/spiderplant.jpg";
import plantImg3 from "./images/aloe.jpg";
import plantImg4 from "./images/peacelily.jpg";
import plantImg5 from "./images/rubberplant.jpg";
import plantImg6 from "./images/bostonfern.jpg";

import plantImg7 from "./images/mint.jpg";
import plantImg8 from "./images/lavender.jpg";
import plantImg9 from "./images/rosemary.jpg";
import plantImg10 from "./images/thyme.jpg";
import plantImg11 from "./images/hyacinth.jpg";
import plantImg12 from "./images/jasmine.jpg";

function ProductGridwall() {
  return (
    <div className="product-page">
      <Navbar />
      <div className="product-title">
        <p>Air Purifying Plants</p>
      </div>

      <div className="product-grid-container">
        <div className="grid-item">
          <div className="product-card">
            <div className="image-container">
              <img className="product-image" src={plantImg} alt="Snake Plant" />
            </div>
            <h3>Snake Plant </h3>
            <p className="price">$15</p>
            <p className="description">Produces oxygen at night.</p>
            <button className="add-button">Add to Cart</button>
            <div className="sale-badge">SALE</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="product-card">
            <div className="image-container">
              <img
                className="product-image"
                src={plantImg2}
                alt="Spider Plant"
              />
            </div>

            <h3>Spider Plant </h3>
            <p className="price">$12</p>
            <p className="description">Graceful,air-purifying green beauty.</p>
            <button className="add-button">Add to Cart</button>
            <div className="sale-badge">SALE</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="product-card">
            <div className="image-container">
              <img className="product-image" src={plantImg3} alt="Aloe Vera" />
            </div>
            <h3>Aloe Vera</h3>
            <p className="price">$16</p>
            <p className="description">Famous for its healing properties.</p>
            <button className="add-button">Add to Cart</button>
            <div className="sale-badge">SALE</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="product-card">
            <div className="image-container">
              <img className="product-image" src={plantImg4} alt="Peace Lily" />
            </div>
            <h3>Peace Lily </h3>
            <p className="price">$18</p>
            <p className="description">
              Ability to purify indoor air by removing toxins.
            </p>
            <button className="add-button">Add to Cart</button>
            <div className="sale-badge">SALE</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="product-card">
            <div className="image-container">
              <img
                className="product-image"
                src={plantImg5}
                alt="Rubber Plant"
              />
            </div>

            <h3>Rubber Plant </h3>
            <p className="price">$20</p>
            <p className="description">
              Glossy leaves,low-maintenance elegance.
            </p>
            <button className="add-button">Add to Cart</button>
            <div className="sale-badge">SALE</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="product-card">
            <div className="image-container">
              <img
                className="product-image"
                src={plantImg6}
                alt="Boston Fern"
              />
            </div>

            <h3>Boston Fern </h3>
            <p className="price">$18</p>
            <p className="description">Air-purifying lush green foliage.</p>
            <button className="add-button">Add to Cart</button>
            <div className="sale-badge">SALE</div>
          </div>
        </div>
      </div>

      <div className="product-title">
        <p>Aromatic Fragrant Plants</p>
      </div>

      <div className="product-grid-container">
        <div className="grid-item">
          <div className="product-card">
            <div className="image-container">
              <img
                className="product-image"
                src={plantImg7}
                alt="Mint Plants"
              />
            </div>
            <h3>Mint </h3>
            <p className="price">$14</p>
            <p className="description">Refreshing,aromatic and fast-growing.</p>
            <button className="add-button">Add to Cart</button>
            <div className="sale-badge">SALE</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="product-card">
            <div className="image-container">
              <img
                className="product-image"
                src={plantImg8}
                alt="Lavender Plant"
              />
            </div>
            <h3>Lavender</h3>
            <p className="price">$18</p>
            <p className="description">
              Fragrant,soothing and low-maintenance.
            </p>
            <button className="add-button">Add to Cart</button>
            <div className="sale-badge">SALE</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="product-card">
            <div className="image-container">
              <img
                className="product-image"
                src={plantImg9}
                alt="Rosemary Plant"
              />
            </div>
            <h3>Rosemary</h3>
            <p className="price">$16</p>
            <p className="description">Refreshing,aromatic and fast-growing.</p>
            <button className="add-button">Add to Cart</button>
            <div className="sale-badge">SALE</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="product-card">
            <div className="image-container">
              <img
                className="product-image"
                src={plantImg10}
                alt="Thyme Plant"
              />
            </div>

            <h3>Thyme</h3>
            <p className="price">$15</p>
            <p className="description">Versatile, fragrant, and hardy herb.</p>
            <button className="add-button">Add to Cart</button>
            <div className="sale-badge">SALE</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="product-card">
            <div className="image-container">
              <img
                className="product-image"
                src={plantImg11}
                alt="Hyacinth Plant"
              />
            </div>

            <h3>Hyacinth</h3>
            <p className="price">$25</p>
            <p className="description">
              Vibrant, fragrant, and spring bloomer.
            </p>
            <button className="add-button">Add to Cart</button>
            <div className="sale-badge">SALE</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="product-card">
            <div className="image-container">
              <img
                className="product-image"
                src={plantImg12}
                alt="Jasmine Plant"
              />
            </div>

            <h3>Jasmine</h3>
            <p className="price">$20</p>
            <p className="description">
              Sweet-scented,elegant and fast-growing.
            </p>
            <button className="add-button">Add to Cart</button>
            <div className="sale-badge">SALE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGridwall;
