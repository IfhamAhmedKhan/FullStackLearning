import React from 'react';
import '../index.css'
import linkedinLogo from '../assets/Images/linkedin-logo.jpg';
import GithubLogo from '../assets/Images/github-logo.png';
import InstaLogo from '../assets/Images/Instagram_logo.png';
import WhatsappLogo from '../assets/Images/whatsapp-logo.jpg';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="social-icons mt-4">
          <a href="https://github.com/IfhamAhmedKhan" target="_blank" rel="noopener noreferrer">
            <img src={GithubLogo} alt="GitHub" className="img-icon" />
          </a>
          <a href="https://www.linkedin.com/in/ifham-ahmed-khan/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="img-icon" />
          </a>
          <a href="https://www.instagram.com/iftantary/" target="_blank" rel="noopener noreferrer">
            <img src={InstaLogo} alt="Instagram" className="img-icon" />
          </a>
          <a href="https://wa.me/923161611907" target="_blank" rel="noopener noreferrer">
            <img src={WhatsappLogo} alt="WhatsApp" className="img-icon" />
          </a>
        </div>
      <div className="container">
        <p>&copy; 2025 Ifham Ahmed Khan. </p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
