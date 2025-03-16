import React from "react";
import "../Cssfiles/Image.css";


const images = [
  "https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-bedroom-guest-room-five-star-hotel-image_990205.jpg",
  "https://thumbs.dreamstime.com/b/modern-hotel-room-comfortable-bed-private-balcony-offering-beautiful-lake-forest-views-generative-ai-324912206.jpg",
  "https://i.pinimg.com/736x/58/ec/f0/58ecf0421caca6378db86a7f26eca12c.jpg",
  "https://webbox.imgix.net/images/scmwttivwljcinct/19f77dda-dfc3-41bb-840d-c6fa68f971b4.jpg?auto=format,compress&fit=crop&crop=entropy",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
  "https://thumbs.dreamstime.com/b/elegant-luxury-hotel-bedroom-china-city-views-lavish-decor-night-luxurious-features-plush-bedding-stylish-332764234.jpg",

];

const ImageGallery = () => {
  return (
    <section className="image-gallery">
      <h2 className="gallery-title">Photos of our rooms</h2>
      <button className="view-all">View all photos</button>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div key={index} className="image-card">
            <img src={src} alt={`Gallery ${index}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
