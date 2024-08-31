import React from 'react';
import '../index.css';
import linkedinLogo from '../assets/Images/linkedin-logo.jpg'
import GithubLogo from '../assets/Images/github-logo.png'
import InstaLogo from '../assets/Images/Instagram_logo.png'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <form action="#" method="post" className="contact-form">
          <div className="mb-3">
            <label htmlFor="Name-form" className="form-label">Name</label>
            <input type="text" className="form-control" id="Name-form" name="Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="Email-form" className="form-label">Email</label>
            <input type="email" className="form-control" id="Email-form" name="Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="Message-form" className="form-label">Message</label>
            <textarea className="form-control" id="Message-form" name="Message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
        <div className="social-icons mt-4">
          <a href="https://github.com/IfhamAhmedKhan" target="_blank" rel="noopener noreferrer"><img src={GithubLogo} alt="GitHub" className="img-icon" /></a>
          <a href="https://www.linkedin.com/in/ifham-ahmed-khan/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="LinkedIn" className="img-icon" /></a>
          <a href="https://www.instagram.com/iftantary/" target="_blank" rel="noopener noreferrer"><img src={InstaLogo} alt="LinkedIn" className="img-icon" /></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
