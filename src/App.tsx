import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home">
        {/* Hero Section */}
        <div className="hero">
          <h1>Charlie Liu</h1>
          <p>Web Developer | Photographer</p>
          <a href="#portfolio" className="cta-button">
            View Portfolio
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="about-content">
          <h2>About Me</h2>
          <img src="profile-picture.jpg" alt="Profile Picture" />
          <p>
            I have been a developer for three years and a photographer for a few
            months. I am passionate about creating visually stunning websites
            and capturing captivating moments through my lens.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          {/* Add your portfolio images here */}
          <div className="portfolio-item">
            <a href="portfolio-image-1.jpg">
              <img src="thumbnail-1.jpg" alt="Portfolio Image 1" />
            </a>
          </div>
          <div className="portfolio-item">
            <a href="portfolio-image-2.jpg">
              <img src="thumbnail-2.jpg" alt="Portfolio Image 2" />
            </a>
          </div>
          {/* Add more portfolio items as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <div className="contact-form">
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Charlie Liu. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
