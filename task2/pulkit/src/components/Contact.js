import React from 'react';

const Contact = () => {
    return (
      <div className="container mt-4">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor tortor sed est accumsan, nec efficitur urna congue.</p>

        <h2>Contact Information</h2>
        <ul className="list-group">
          <li className="list-group-item">Email: example@example.com</li>
          <li className="list-group-item">Phone: 123-456-7890</li>
          <li className="list-group-item">Address: 123 Main Street, City, Country</li>
        </ul>
      <h1>Fill this form to get started</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
