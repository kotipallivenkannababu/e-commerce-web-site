import React from 'react';
import './contactus.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="title-green">Get in Touch</h2>
        <p><FaEnvelope className="icon-red" /> <strong>Email:</strong> kotipallivenkannababu8@gmail.com</p>
        <p><FaPhone className="icon-green" /> <strong>Phone:</strong> 9908842947</p>
        <p><FaMapMarkerAlt className="icon-red" /> <strong>Address:</strong> Kalluru, Khammam</p>
        
        <h3 className="follow-title">Follow Us</h3>
        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
        </div>
      </div>

      <div className="contact-right">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <textarea rows="5" placeholder="Your message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
