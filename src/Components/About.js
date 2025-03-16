import React from "react";
import "../Cssfiles/About.css";
import ImageGallery from "./Image";

const About = () => {
  return (
    <>
<div style={{ marginTop: "100px" }}>
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://img.freepik.com/free-photo/about-as-service-contact-information-concept_53876-138509.jpg"
            alt="Living Room"
          />
        </div>
        <div className="about-content">
          <h2>ABOUT US</h2>
          <p>
            Ac varius lectus tellus tellus quisque tristique aenean. Volutpat velit nulla eu
            iaculis risus in urna. Eu morbi vel purus velit dui vel egestas purus sed. Eget
            turpis tincidunt faucibus montes arcu in nullam tortor orci. Nulla tellus sed
            purus vestibulum sagittis pretium donec nec mattis ollis porta sit ut.
          </p>
          <p>
            Facilisi ut vulputate volutpat a aliquet. Facilisis sed quis pretium amet hac.
            Justo tristique sagittis sodales viverra venenatis integer fringilla.
          </p>
          <button className="about-btn">ABOUT US →</button>
        </div>
      </div>
    </section>
   </div>
   <div>
    <ImageGallery/>
   </div>
   </>
  );
};

export default About;
