import React from "react";
import "./Home.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">Portfolio.</div>
        <ul className="navbar-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          {/* Left Section */}
          <div className="hero-text">
            <h2>Hello, It's Me</h2>
            <h1>Rohan Vanzara</h1>
            <h3>
              And I'm a <span className="highlight">Frontend Developer</span>
            </h3>
            <p>
              I am a passionate and detail-oriented Frontend Developer with a strong foundation in modern web technologies like HTML, CSS, JavaScript, and React.js. I specialize in building responsive, user-friendly interfaces that offer seamless experiences across devices.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
            <button className="download-btn">Download CV</button>
          </div>

          {/* Right Section */}
          <div className="hero-image">
            <div className="image-wrapper">
              <img src="https://static.vecteezy.com/system/resources/previews/034/324/148/non_2x/front-view-of-an-animated-boy-standing-wearing-tshirt-character-design-free-photo.jpeg" alt="John Kendric" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

