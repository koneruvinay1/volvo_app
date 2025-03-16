import React, { useState } from "react";
import "../Cssfiles/Contact.css"; // Import CSS file

// Importing Icons
import msg_icon from "../Assets/msg-icon.png";
import mail_icon from "../Assets/mail-icon.png";
import phone_icon from "../Assets/phone-icon.png";
import location_icon from "../Assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "4ec42730-e87c-45b0-912d-faa171ed4766");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error: " + data.message);
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
     
    <div className="contact-container">
      {/* Left Section - Contact Details */}
      <div className="contact-info">
        <h3>
          Send a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus
          perferendis laborum nam commodi dolor rem, aut pariatur magnam
          repellendus odio suscipit odit perspiciatis sed, dicta distinctio
          voluptas velit esse.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Email Icon" /> Contact@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="Phone Icon" /> +123456789
          </li>
          <li>
            <img src={location_icon} alt="Location Icon" />
            77, Multiplex Ave, Bangalore <br /> MA 02319, United States
          </li>
        </ul>
      </div>

      {/* Right Section - Contact Form */}
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter Your Mobile Number" required />

          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter Your Message Here" required></textarea>

          <button type="submit" className="btn-submit">Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </div>
  );
};

export default Contact;
