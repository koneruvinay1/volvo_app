import React from "react";
import "../Cssfiles/DescriptionPage.css";

const DescriptionPage = ({ hotel, onBack }) => {
  if (!hotel) return null; 

  return (
    <div className="description-container">
     
      <img src={hotel.image} alt={hotel.name} className="description-image" />
      <div className="description-content">
      <button className="back-button" onClick={onBack}>✖</button>
        <h2 className="description-title">{hotel.name}</h2>
        <p className="description-text">{hotel.location}</p>
        <p className="description-rating">⭐ {hotel.rating}</p>
        <p className="description-price">INR {hotel.price}</p>
        <button className="book-now-button">Book Now</button>
      </div>
    </div>
  );
};

export default DescriptionPage;
