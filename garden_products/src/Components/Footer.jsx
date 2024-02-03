import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    



   <div className="footer-container">
      <h1 className='footer-h1'>Contact</h1>

      <div className="footer-cards">

        <div className="card">
          <h3 className='footer-h3'>Phone</h3>
          <p>+49 999 999 99 99</p>
        </div>

        <div className="card">
          <h3 className='footer-h3'>Social Media</h3>
          <img src="../Components/icon/Insta.png" alt="WatsApp" />
          <img src="Components/icon/Insta.png" alt="Instagram" />   
        </div>

        <div className="card">
          <h3 className='footer-h3'>Address</h3>
          <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
        </div>

        <div className="card">
          <h3 className='footer-h3'>Working Hours</h3>
          <p>24 hours a day</p>
        </div>
      </div>
      <div className="maps-container">
      <iframe src="https://maps.app.goo.gl/vzT5iEUxSxNCWK4i6" title="Google Map"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe> 
        </div>

      </div>
  );
};

export default Footer;
