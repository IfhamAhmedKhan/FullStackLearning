import React from "react";
import "../index.css";
import myPic from "../assets/Images/IMG_0010.JPG";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={myPic}
              alt="Ifham Ahmed Khan"
              className="img-profile-pic"
            />
          </div>
          <div className="col-md-8">
            <h2 style={{ color: "#ffd700" }}>About Me</h2>
            <p>
              I am a graduate student with a Bachelor's degree in Computer
              Science from Muhammad Ali Jinnah University. I have a strong
              passion for web development, data science, and machine learning.
            </p>
            <h3>Skills</h3>
            <div className="row">
              <div className="col-md-6">
                <h4>Programming & Development</h4>
                <ul>
                  <li>Python, Java, C, C#</li>
                  <li>JavaScript, TypeScript, Kotlin</li>
                  <li>HTML/CSS, React, Streamlit</li>
                </ul>
                <br />
              </div>
              <div className="col-md-6">
                <h4>Tools & Frameworks</h4>
                <ul>
                  <li>Git, Selenium, Unity, Unreal Engine</li>
                  <li>Android Studio, SQL Server Studio</li>
                  <li>WordPress/Wix, Prototyping (JustInMind, Balsamiq)</li>
                </ul>
                <br />
              </div>
              <div className="col-md-6">
                <h4 className="data-science-list">Data Science & ML</h4>
                <ul>
                  <li>Data Science, Machine Learning, Deep Learning</li>
                  <li>Data Cleaning</li>
                  <li>Visualization</li>
                </ul>
                <br />
              </div>
              <div className="col-md-6">
                <h4 className="languages-list">Languages</h4>
                <ul className="languages-list">
                  <li>Urdu</li>
                  <li>English</li>
                  <li>German</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
