import React, { useRef } from 'react';
import './contactus.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const dateTimeInput = document.createElement('input');
    dateTimeInput.type = 'hidden';
    dateTimeInput.name = 'date_time';
    dateTimeInput.value = new Date().toLocaleString(); // current timestamp
    form.current.appendChild(dateTimeInput);

    emailjs.sendForm(
      'service_i3t0kvh',
      'template_b9s5dgr',
      form.current,
      'gimfEfjaE6hdhlA1x'
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send the message. Try again later.');
      console.error(error);
    });
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Enter your name" required />
          <input type="email" name="from_email" placeholder="Enter your email" required />
          <textarea name="message" rows="5" placeholder="Your message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
