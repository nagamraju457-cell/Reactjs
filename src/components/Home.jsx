import React from "react";
import forest from "../assets/forest.jpeg";

export default function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${forest})`,
        }}
      >
        <div className="hero-content">
          <h1>Welcome to My Website</h1>

          <p>
            Building modern, responsive and user-friendly web applications
            using React, JavaScript, HTML and CSS.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Explore</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* About */}

      <section className="about">

        <h2>About Us</h2>

        <p>
          We develop beautiful websites with clean design and excellent
          performance. Our goal is to provide high-quality digital solutions
          for businesses and individuals.
        </p>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="stat-card">
          <h2>150+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h2>100+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card">
          <h2>5+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Support</p>
        </div>

      </section>

      {/* Services */}

      <section className="services">

        <h2>Our Services</h2>

        <div className="service-container">

          <div className="service-card">
            <h3>💻 Web Development</h3>
            <p>
              Responsive and modern websites built with React.
            </p>
          </div>

          <div className="service-card">
            <h3>📱 App Development</h3>
            <p>
              Mobile-friendly applications with attractive UI.
            </p>
          </div>

          <div className="service-card">
            <h3>☁ Cloud Solutions</h3>
            <p>
              Secure and scalable cloud deployment services.
            </p>
          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="choose">

        <h2>Why Choose Us?</h2>

        <div className="choose-container">

          <div className="choose-box">
            <h3>⚡ Fast</h3>
            <p>Optimized websites with excellent performance.</p>
          </div>

          <div className="choose-box">
            <h3>🎨 Creative</h3>
            <p>Modern and attractive user interface designs.</p>
          </div>

          <div className="choose-box">
            <h3>🔒 Secure</h3>
            <p>Reliable and secure web applications.</p>
          </div>

        </div>

      </section>

      {/* Call to Action */}

      <section className="cta">

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