import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contactSection">
      <h2>Contact</h2>
      <div className="contactInfo">
        <div className="infoItem">
          <i className="fa-solid fa-envelope"></i>
          <p>Email: pulkit@example.com</p>
        </div>
        <div className="infoItem">
          <i className="fa-brands fa-twitter"></i>
          <p>Twitter: @pulkit</p>
        </div>
        <div className="infoItem">
          <i className="fa-brands fa-linkedin"></i>
          <p>LinkedIn: /in/pulkit</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
