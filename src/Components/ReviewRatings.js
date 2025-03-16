import React from "react";
import "../Cssfiles/Score.css"; 
import bookingLogo from "../Assets/bookingcom-logo.png";
import tripadvisorLogo from "../Assets/trip.png";
import googleLogo from "../Assets/google.png";
import hostelbookersLogo from "../Assets/hostel.png";

const ReviewRatings = () => {
  const ratings = [
    { score: "8.3", outOf: "/10", comments: "1398 comments", logo: bookingLogo },
    { score: "4.6", outOf: "/5", comments: "460 notes", logo: tripadvisorLogo },
    { score: "4.9", outOf: "/5", comments: "2389 notes", logo: googleLogo },
    { score: "98%", outOf: "", comments: "2389 recommendations", logo: hostelbookersLogo },
  ];

  return (
    <section className="review-ratings">
      <div className="ratings-container">
        {ratings.map((rating, index) => (
          <div key={index} className="ratings-card">
            <h2 className="ratings-score">
              {rating.score} <span>{rating.outOf}</span>
            </h2>
            <p className="ratings-comments">{rating.comments}</p>
            <img src={rating.logo} alt="Review Source" className="ratings-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewRatings;
