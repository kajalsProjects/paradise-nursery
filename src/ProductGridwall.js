import "./ProductGridwall.css";
import Navbar from "./Navbar";
import { useEffect } from "react";

export default function ProductGridwall({ plants }) {
  useEffect(() => {
    console.log("Product gridwall page data", plants);
  }, [plants]);

  return (
    <div className="product-page">
      <Navbar />

      <div className="product-title">
        <p>Air Purifying Plants</p>
      </div>

      <div className="product-grid-container">
        {plants.map((plant) => (
          <div className="grid-item">
            <div className="product-card">
              <div className="product-image-container">
                <img
                  className="product-img"
                  src={`images/${plant.image}`}
                  alt={plant.name}
                />
              </div>
              <h3 className="plant-title">{plant.name}</h3>
              <p className="plant-price">{plant.cost}</p>
              <p className="plant-description">{plant.description}</p>

              <button className="product-add-button">Add to Cart</button>

              <div className="product-sale-badge">SALE</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
