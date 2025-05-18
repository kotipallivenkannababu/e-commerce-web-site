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
    dateTimeInput.value = new Date().toLocaleString();
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
        <p><FaEnvelope className="icon-red" /> <strong>Email:</strong> kotipallivenkannababu1009@gmail.com</p>
        <p><FaPhone className="icon-green" /> <strong>Phone:</strong> 9908842947</p>
        <p><FaMapMarkerAlt className="icon-red" /> <strong>Address:</strong> Kalluru, Khammam, Telangana-507209</p>

        <h3 className="follow-title">Follow Us</h3>
        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
        </div>

        {/* Google Map Embed */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3804.6239482609344!2d78.3935950751681!3d17.525455783385404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMxJzMxLjYiTiA3OMKwMjMnNDYuMiJF!5e0!3m2!1sen!2sin!4v1747533689591!5m2!1sen!2sin" 
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
