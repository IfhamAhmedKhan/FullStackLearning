import React from 'react';
import '../index.css';
import vid from '../assets/Videos/Developer Coding Background.mp4'

const Home = () => {
  return (
    <section id="home" className="home-section">
      <video
        src={vid}
        className="background-video"
        autoPlay
        loop
        muted
      ></video>
      <div className="content">
        <h1 id="color-changing-heading">
          Welcome to my <br />Personal Portfolio
        </h1>
        <a href="#about" className="btn btn-primary">Learn More</a>
      </div>
    </section>
  );
}

export default Home;
