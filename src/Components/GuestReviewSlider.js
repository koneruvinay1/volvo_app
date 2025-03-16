import React, { useState } from "react";
import "../Cssfiles/GuestReviewSlider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {
    image: "https://media.istockphoto.com/id/1256296335/photo/a-romantic-couple-on-summer-vacation-enjos-the-sunset-over-the-mediterranean-sea-by-the-pool.jpg?s=612x612&w=0&k=20&c=FJurmc0CUMEpoAdRIUfJ2rHIOM-gYs-V5MM_0PoOJtQ=",
    rating: 5,
    date: "December 2021",
    title: "Diam sit molestie at elementum eu",
    text: "Consequat interdum varius sit amet mattis vulputate enim nulla. Posuere morbi leo urna molestie at elementum eu facilisis sed.",
    author: "Kate Walker",
  },
  {
    image: "https://unlockdesizn.com/php-template/hosteller/img/index/slide03.webp",
    rating: 4,
    date: "January 2022",
    title: "Amazing stay with wonderful service",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "John Doe",
  },
  {
    image: "https://unlockdesizn.com/php-template/hosteller/img/index/slide05.webp",
    rating: 5,
    date: "March 2022",
    title: "Best experience ever!",
    text: "Nulla facilisi. Cras fermentum odio eu feugiat pretium nibh. Phasellus viverra nulla ut metus varius laoreet.",
    author: "Emily Johnson",
  },
];

const GuestReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const { image, rating, date, title, text, author } = reviews[currentIndex];

  return (
    <div className="review-section">
      <div className="review-container">

        <div className="review-image">
          <img src={image} alt="Guest" />
        </div>

    
        <div className="review-content">
          <h2>What our guests say</h2>
          <div className="review-card">
            <div className="review-rating">
              {"⭐".repeat(rating)}
            </div>
            <p className="review-date">
              <strong>Date of stay:</strong> {date}
            </p>
            <h3>{title}</h3>
            <p>{text}</p>
            <p className="review-author">{author}</p>
          </div>
         
          <div className="review-navigation">
            <button onClick={prevReview} className="nav-btn">
              <FaArrowLeft />
            </button>
            <button onClick={nextReview} className="nav-btn">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestReviewSlider;
