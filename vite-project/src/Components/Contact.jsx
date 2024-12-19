import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      icon: <FaEnvelope size={50} color="#d44638" />,
      title: "Email",
      detail: "usmandev502@gmail.com",
      link: "mailto:usmandev502@gmail.com",
    },
    {
      id: 2,
      icon: <FaPhoneAlt size={50} color="#34a853" />,
      title: "Phone",
      detail: "+92 341 6654988",
      link: "tel:+923416654988",
    },

    
    {
      id: 3,
      icon: <FaWhatsapp size={50} color="#25D366" />,
      title: "WhatsApp",
      detail: "+92 341 6654988",
      link: "https://wa.me/923416654988",
    },
  ];

  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <p className="contact-subheader">We'd love to hear from you!</p>
      <div className="contact-cards">
        {contactDetails.map((contact) => (
          <div className="contact-card" key={contact.id}>
            <div className="contact-icon">{contact.icon}</div>
            <h2 className="contact-title">{contact.title}</h2>
            <p className="contact-detail">{contact.detail}</p>
            <a href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-link">
              Contact via {contact.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
