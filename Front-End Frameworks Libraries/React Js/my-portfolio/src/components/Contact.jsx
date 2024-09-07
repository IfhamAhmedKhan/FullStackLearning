import React, { useState } from 'react';
import '../index.css';
import linkedinLogo from '../assets/Images/linkedin-logo.jpg';
import GithubLogo from '../assets/Images/github-logo.png';
import InstaLogo from '../assets/Images/Instagram_logo.png';

const Contact = () => {
  // State hooks for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a form data object to send to the backend
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      // Make a POST request to your backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('There was an issue sending the message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending the message.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="mb-3">
            <label htmlFor="Name-form" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="Name-form" 
              name="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email-form" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="Email-form" 
              name="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Message-form" className="form-label">Message</label>
            <textarea 
              className="form-control" 
              id="Message-form" 
              name="Message" 
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
