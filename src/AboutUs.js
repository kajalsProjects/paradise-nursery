import React, { useState } from "react";
import "./AboutUs.css";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/products");
  };

  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="about-container">
        <div className="about-details">
          <h1>Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Every Plants Tells a Story!</p>

          <button className="get-started-btn" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
        <div className="content">
          <p className="about-us-details">
            Paradise Nursery: Where Every Plant Tells a Story!
          </p>
          <p className="about-us-content">
            At Paradise Nursery, we believe in the magic of greenery and its
            power to transform spaces and lives. Our nursery is more than just a
            place to buy plants—it’s a haven for nature lovers, a sanctuary for
            those seeking calm, and a hub of inspiration for aspiring gardeners.
            From vibrant flowers that brighten your home to low-maintenance
            succulents perfect for busy lifestyles, we offer a thoughtfully
            curated collection for every need.
          </p>
          <p className="about-us-content">
            We source our plants from trusted growers, ensuring they are
            healthy, sustainable, and nurtured with care. Whether you're a
            seasoned gardener or just starting your journey, our friendly team
            is here to guide you with expert advice and creative ideas.
          </p>
          <p className="about-us-content">
            At Paradise Nursery, each plant has a story, and we invite you to
            make it part of yours. Let us help you bring a touch of nature into
            your life and create your own little paradise. Together, let’s grow,
            blossom, and thrive!
          </p>
        </div>
      </div>
    </div>
  );
}
