import React from 'react';

const About = () => {
  return (
    <div className="container mt-4">
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor tortor sed est accumsan, nec efficitur urna congue.</p>

      <h2>Our Team</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img src="https://placeimg.com/300/300/people" className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img src="https://placeimg.com/300/300/people" className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img src="https://placeimg.com/300/300/people" className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">David Johnson</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
