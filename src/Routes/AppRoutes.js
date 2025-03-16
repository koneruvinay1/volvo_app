import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Rooms from "../Components/Rooms";

import Contact from "../Components/Contact";
import News from "../Components/News";
import Footer from "../Footer/Footer";
import Cards from "../Components/Cards";
import FeaturesSection from "../Components/FeaturesSection";
import GuestReviewSlider from "../Components/GuestReviewSlider";
import ReviewRatings from "../Components/ReviewRatings";
import ImageGallery from "../Components/Image";
import HotelList from "../Components/HotelList";


// import SingleRoom from "../Components/SingleRoom";
// import DoubleRoom from "../Components/DoubleRoom";
// import LatestNews from "../Components/LatestNews";
// import Updates from "../Components/Updates";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Rooms />} />
      {/* <Route path="/rooms/single" element={<SingleRoom />} />
      <Route path="/rooms/double" element={<DoubleRoom />} /> */}
      {/* <Route path="/rooms/suite" element={<Suite />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/featuresSection" element={<FeaturesSection />} />
      <Route path="/guestReviewSlider" element={<GuestReviewSlider />} />
      <Route path="/reviewRatings" element={<ReviewRatings />} />
      <Route path="/image" element={<ImageGallery />} />
      <Route path="/hotelList" element={<HotelList />} />
      
      {/* <Route path="/news/latest" element={<LatestNews />} />
      <Route path="/news/updates" element={<Updates />} /> */}
    </Routes>
  );
};

export default AppRoutes;
