import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {


    

    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4ec42730-e87c-45b0-912d-faa171ed4766");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send a message <img src={msg_icon} alt='' /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus
          perferendis laborum nam commodi dolor rem, aut pariatur magnam
          repellendus odio suscipit odit perspiciatis sed, dicta distinctio
          voluptas velit esse.
        </p>
        <ul>
            <li><img src={mail_icon} alt='' />Contact@gmail.com</li>
            <li><img src={phone_icon} alt='' />+123456789</li>
            <li><img src={location_icon} alt='' />77, multiplex Ave , Bangalore<br/> MA  02319, UnitedStates</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter Your Mobile Number" required/>
            <label>Write your message here</label>
            <textarea name="msg" rows='6' placeholder="Enter Your Message Here" required/>
            <button type="submit" className="btn dark-btn">Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
