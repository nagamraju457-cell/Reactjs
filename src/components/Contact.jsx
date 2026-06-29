import React, { useState } from "react";
import forest from "../assets/forest.jpeg";
import 'animate.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Contact() {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false
      });
    }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted successfully.");

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    
    <div className="contact-page">

      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Whether you have a question,
          project idea, feedback, or simply want to say hello,
          our team is always ready to help.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="cards" data-aos="flip-right">

        <div className="card" data-aos="flip-down">
          <h2>📍 Office Address</h2>
          <p>
            CV Tech Park
            <br />
            Hyderabad
            <br />
            Telangana, India
          </p>
        </div>

        <div className="card"data-aos="flip-up">
          <h2>📞 Phone</h2>
          <p>+91 8464091858</p>
          <p>+91 7032377379</p>
        </div>

        <div className="card" data-aos="flip-down">
          <h2>📧 Email</h2>
          <p>nagamraju457@gmail.com</p>
          <p>contact@company.com</p>
        </div>

        <div className="card" data-aos="flip-up">
          <h2>🕒 Working Hours</h2>
          <p>Monday - Friday</p>
          <p>9:00 AM - 6:00 PM</p>
        </div>

      </section>

      {/* Contact Form */}

      <section className="form-section" data-aos="slide-up">

        <div className="form-left">

          <h2>Send Us a Message</h2>

          <p>
            Fill out the form below and our team will get
            back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

        {/* Right Side */}

        <div className="form-right">

          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Contact"
            width="250"
          />

          <h3>Need Immediate Help?</h3>

          <p>
            Our support team is available to assist
            you with any queries regarding services,
            projects, collaborations, or technical issues.
          </p>

          <div className="social" data-aos="slide-down">

            <button>Facebook</button>
            <button>Instagram</button>
            <button>LinkedIn</button>
            <button>GitHub</button>

          </div>

        </div>

      </section>

      {/* Google Map */}

      <section className="map" data-aos="zoom-out">

        <h2>Visit Our Office</h2>

        <iframe
          title="location"
          src="https://www.google.com/maps/dir/17.4809934,78.4084697/Metro+Station+Kukatpally,+Kukatpally,+Hyderabad,+Telangana+500072/@17.4830103,78.4078963,17z/data=!3m1!4b1!4m19!1m9!3m8!1s0x3bcb91bc62c2da3d:0x5747396fb1a42c4c!2sMetro+Station+Kukatpally,+Kukatpally,+Hyderabad,+Telangana+500072!3b1!8m2!3d17.4849287!4d78.4118867!15sChxrdWthdHBhbGx5IG1ldHJvIHN0YXRpb24gbWFwkgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11f4prlnph!4m8!1m1!4e1!1m5!1m1!1s0x3bcb91bc62c2da3d:0x5747396fb1a42c4c!2m2!1d78.4118867!2d17.4849287?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

      </section>

      {/* FAQ */}

      <section className="faq">

        <h2>Frequently Asked Questions</h2>

        <div className="question" data-aos="fade-right">

          <h3>How quickly will I receive a response?</h3>

          <p>
            Usually within 24 hours on business days.
          </p>

        </div>

        <div className="question" data-aos="fade-left">

          <h3>Can I schedule a meeting?</h3>

          <p>
            Yes, simply mention your preferred date and
            time in the message.
          </p>

        </div>

        <div className="question" data-aos="fade-right">

          <h3>Do you offer technical support?</h3>

          <p>
            Absolutely! Our technical team is available
            Monday through Friday.
          </p>

        </div>

      </section>

      {/* Newsletter */}

      <section className="newsletter" data-aos="zoom-out">

        <h2>Subscribe to Our Newsletter</h2>

        <p>
          Stay updated with our latest blogs,
          product launches, and technology news.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>Subscribe</button>

      </section>

      {/* Footer */}

      <footer>

        <h2>Thank You for Visiting!</h2>

        <p>
          We appreciate your interest in our company.
          Feel free to connect with us anytime.
        </p>

        <p>
          © 2026 Your Company. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}
