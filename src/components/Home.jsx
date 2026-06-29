import Animate from "animate";
import React from "react";
import forest from "../assets/forest.jpeg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);
  return (
    <div className="home "  data-aos="zoom-in">

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${forest})`,
        }}
      >
        <div className="hero-content animate__animated animate__zoomIn">
          <h1>Welcome to Razz's Website</h1>

          <p>
            Building modern, responsive and user-friendly web applications
            using React, JavaScript, HTML and CSS.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" data-aos="fade-right">Explore</button>
            <button className="btn-secondary"data-aos="fade-left">Learn More</button>
          </div>
        </div>
      </section>

      {/* About */}

      <section className="about"  data-aos="fade-up"  data-aos-duration="3000">

        <h2>About Us</h2>

        <p>
          We develop beautiful websites with clean design and excellent
          performance. Our goal is to provide high-quality digital solutions
          for businesses and individuals.
        </p>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="stat-card" data-aos="fade-right">
          <h2>150+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card" data-aos="fade-right"
>
          <h2>100+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card" data-aos="fade-left">
          <h2>5+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card" data-aos="fade-left">
          <h2>24/7</h2>
          <p>Support</p>
        </div>

      </section>

      {/* Services */}

      <section className="services" data-aos="slide-up">

        <h2>Our Services</h2>

        <div className="service-container" data-aos="fade-up">

          <div className="service-card" data-aos="fade-right">
            <h3>💻 Web Development</h3>
            <p>
              Responsive and modern websites built with React.
            </p>
          </div>

          <div className="service-card" data-aos="zoom-in">
            <h3>📱 App Development</h3>
            <p>
              Mobile-friendly applications with attractive UI.
            </p>
          </div>

          <div className="service-card" data-aos="fade-left">
            <h3>☁ Cloud Solutions</h3>
            <p>
              Secure and scalable cloud deployment services.
            </p>
          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="choose" data-aos="zoom-in">

        <h2>Why Choose Us?</h2>

        <div className="choose-container" data-aos="zoom-in">

          <div className="choose-box" data-aos="fade-right">
            <h3>⚡ Fast</h3>
            <p>Optimized websites with excellent performance.</p>
          </div>

          <div className="choose-box" data-aos="fade-up">
            <h3>🎨 Creative</h3>
            <p>Modern and attractive user interface designs.</p>
          </div>

          <div className="choose-box" data-aos="fade-left">
            <h3>🔒 Secure</h3>
            <p>Reliable and secure web applications.</p>
          </div>

        </div>

      </section>

      {/* Call to Action */}

      <section className="cta" data-aos="zoom-in">

        <h2>Ready to Start Your Project?</h2>

        <p>
          Let's build something amazing together.
        </p>

        <button className="btn-primary">
          Get Started
        </button>

      </section>

    </div>
  );
}