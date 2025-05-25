import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_9gypmzn',    // replace with your EmailJS Service ID
      'template_czierp9',   // replace with your EmailJS Template ID
      formData,
      'YFGrrIOVg6IVIpfve'     // replace with your EmailJS public key (user id)
    ).then((result) => {
      console.log(result.text);
      setSubmitted(true);
      setError(null);
      setFormData({ name: "", email: "", message: "" });
    }, (error) => {
      console.log(error.text);
      setError("Failed to send message. Please try again.");
      setSubmitted(false);
    });
  };

  return (
    <section className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text" id="name" name="name" placeholder="Your full name"
            value={formData.name} onChange={handleChange} required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email" id="email" name="email" placeholder="Your email address"
            value={formData.email} onChange={handleChange} required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message" name="message" rows="5" placeholder="Write your message here..."
            value={formData.message} onChange={handleChange} required
          ></textarea>

          <button type="submit">Send Message</button>

          {submitted && <p className="success-message">Message sent successfully!</p>}
          {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}
        </form>

        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: sandhiyameenachii@gmail.com</p>
          
          <p>Location: Coimbatore</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
