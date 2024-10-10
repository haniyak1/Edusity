import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4ed67de8-8000-401b-a39d-2bc2db1e8711");
  
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
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send us a message <img src={msg_icon} alt="Message icon" />
        </h3>
        <p>
          We're here to help! If you have any questions or need assistance, please don't hesitate
          to reach out. Our dedicated team is ready to provide support and ensure you have the
          best experience possible. Fill out the form below, and we'll get back to you shortly!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Email icon" /> Contact@edusity.com
          </li>
          <li>
            <img src={phone_icon} alt="Phone icon" /> +32175924
          </li>
          <li>
            <img src={location_icon} alt="Location icon" /> Edusity Institute, 123 Learning Lane, Education City, EC 45678, USA
          </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message</label>
            <textarea name='message'  rows="6" placeholder='Enter your message' required></textarea>
            <button type='Submit' className='btn dark-btn'> Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result} </span>
      </div>
    </div>
  );
}

export default Contact;
