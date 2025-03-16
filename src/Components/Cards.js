import React from "react";
import "../Cssfiles/Card.css";

const Card = ({ image, price, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      
      <div className="card-content">
  <h3 className="card-title">{title}</h3>
  <div className="card-price">${price} / 1 night</div>
</div>
    </div>
  );
};

const Cards = () => {
  const rooms = [
    {
      image: "https://media.istockphoto.com/id/1050564510/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=ZYEso7dgPl889aYddhY2Fj3GOyuwqliHkbbT8pjl_iM=",
      price: "18",
      title: "Bed in 6-Bed Room with Shared Bathroom",
    },
    {
      image: "https://www.shutterstock.com/image-photo/hotel-room-interior-modern-seaside-600nw-1387008533.jpg",
      price: "35",
      title: "Double Room with Private Bathroom",
    },
    {
      image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg",
      price: "55",
      title: "Luxury Suite with City View",
    },
    {
      image: "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg",
      price: "45",
      title: "Family Room with Balcony",
    },
    {
        image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg",
        price: "55",
        title: "Luxury Suite with City View",
      },
      {
        image: "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg",
        price: "45",
        title: "Family Room with Balcony",
      },
  ];

  return (
    <div className="cards-container">
      {rooms.map((room, index) => (
        <Card key={index} {...room} />
      ))}
    </div>
  );
};

export default Cards;
