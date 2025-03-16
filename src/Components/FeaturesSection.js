import React from "react";
import { FaWifi, FaMapMarkerAlt, FaSuitcase, FaParking } from "react-icons/fa";
import "../Cssfiles/FeaturesSection.css"

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {/* Left Side - Text and Features */}
        <div className="features-text">
          <h2>We have everything you need</h2>
          <p>
            Posuere morbi leo urna molestie at elementum eu facilisis sed. Diam
            phasellus vestibulum lorem sed risus ultricies tristique.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <FaWifi className="feature-icon" />
              <span>Free available high speed WiFi</span>
            </div>
            <div className="feature-item">
              <FaMapMarkerAlt className="feature-icon" />
              <span>Convenient location in the center</span>
            </div>
            <div className="feature-item">
              <FaSuitcase className="feature-icon" />
              <span>Free storage of luggage of any size</span>
            </div>
            <div className="feature-item">
              <FaParking className="feature-icon" />
              <span>Parking place allocated to you</span>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Play Button */}
        <div className="features-image">
          <img src="https://w0.peakpx.com/wallpaper/460/608/HD-wallpaper-hotel-room-hotel-beautiful-art-house-romantic-black-yellow-luxury-rooms-bedrooms-decor-nice-beige-style.jpg" alt="People enjoying" />
          <button className="play-button">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
