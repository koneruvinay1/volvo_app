import React, { useState } from "react";
import "../Cssfiles/HotelList.css";
import DescriptionPage from "./DescriptionPage";

const hotels = [
  {
    id: 1,
    name: "Super Townhouse Rohini Sector 18 formerly Relic Stay",
    location: "North Delhi, New Delhi and NCR",
    rating: 7.8,
    price: 877.87,
    image: "https://bvrbaliholidayrentals.com/storage/images/645dd4e5a04cf.jpg",
  },
  {
    id: 2,
    name: "Sunday Hotels and Residences",
    location: "Gurgaon, New Delhi and NCR",
    rating: 8.0,
    price: 4567.49,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/45/d6/8d/aston-potianak-eksterior.jpg?w=600&h=-1&s=1",
  },
  {
    id: 3,
    name: "Red Maple Bed and Breakfast",
    location: "South Delhi, New Delhi and NCR",
    rating: 7.6,
    price: 3138.78,
    image: "https://www.holidify.com/images/cmsuploads/compressed/Club-Big-3_20230605165112.jpg",
  },
  {
    id: 4,
    name: "Richa's Home",
    location: "Noida, New Delhi and NCR",
    rating: 7.5,
    price: 3634.62,
    image: "https://pbs.twimg.com/profile_images/2541089444/5s8hnyi22vff4vudx5y6_400x400.jpeg",
  },
  {
    id: 5,
    name: "Richa's Home",
    location: "Noida, New Delhi and NCR",
    rating: 7.5,
    price: 3634.62,
    image: "https://static.wixstatic.com/media/3eb9f4_72fcbb9ad6da49529b999c7936a7a65b~mv2.jpg/v1/fill/w_900,h_600,q_90/3eb9f4_72fcbb9ad6da49529b999c7936a7a65b~mv2.jpg",
  },
  {
    id: 6,
    name: "Richa's Home",
    location: "Noida, New Delhi and NCR",
    rating: 7.5,
    price: 3634.62,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/5e/e8/b3/royal-palm-bangunan-bright.jpg?w=600&h=-1&s=1",
  },
  {
    id: 7,
    name: "Richa's Home",
    location: "Noida, New Delhi and NCR",
    rating: 7.5,
    price: 3634.62,
    image: "https://th.bing.com/th/id/OIP.Nb70YRfmOi0ojeDdhjgA3QD0D_?w=384&h=400&rs=1&pid=ImgDetMain",
  },
  {
    id: 8,
    name: "Richa's Home",
    location: "Noida, New Delhi and NCR",
    rating: 7.5,
    price: 3634.62,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/296671403.jpg?k=ef4d72db451d98b6fb70d8f42f255e08fed241cfe01bf5cc0e85bf930fc30478&o=&hp=1",
  },
];

const HotelList = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <div className="hotel-list-container">
      {selectedHotel ? (
        <DescriptionPage hotel={selectedHotel} onBack={() => setSelectedHotel(null)} />
      ) : (
        hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card" onClick={() => setSelectedHotel(hotel)}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <h3 className="hotel-name">{hotel.name}</h3>
              <p className="hotel-location">{hotel.location}</p>
              <p className="hotel-rating">⭐⭐⭐ {hotel.rating}</p>
              <p className="hotel-price">INR {hotel.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HotelList;
