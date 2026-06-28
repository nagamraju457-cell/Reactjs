import React, { useState } from "react";
import forest from "../assets/forest.jpeg";


export default function Contact() {

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
      <section className="hero">
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Whether you have a question,
          project idea, feedback, or simply want to say hello,
          our team is always ready to help.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="cards">

        <div className="card">
          <h2>📍 Office Address</h2>
          <p>
            CV Tech Park
            <br />
            Hyderabad
            <br />
            Telangana, India
          </p>
        </div>

        <div className="card">
          <h2>📞 Phone</h2>
          <p>+91 8464091858</p>
          <p>+91 7032377379</p>
        </div>

        <div className="card">
          <h2>📧 Email</h2>
          <p>nagamraju457@gmail.com</p>
          <p>contact@company.com</p>
        </div>

        <div className="card">
          <h2>🕒 Working Hours</h2>
          <p>Monday - Friday</p>
          <p>9:00 AM - 6:00 PM</p>
        </div>

      </section>

      {/* Contact Form */}

      <section className="form-section">

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

          <div className="social">

            <button>Facebook</button>
            <button>Instagram</button>
            <button>LinkedIn</button>
            <button>GitHub</button>

          </div>

        </div>

      </section>

      {/* Google Map */}

      <section className="map">

        <h2>Visit Our Office</h2>

        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.317072613767!2d78.486671!3d17.385044"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

      </section>

      {/* FAQ */}

      <section className="faq">

        <h2>Frequently Asked Questions</h2>

        <div className="question">

          <h3>How quickly will I receive a response?</h3>

          <p>
            Usually within 24 hours on business days.
          </p>

        </div>

        <div className="question">

          <h3>Can I schedule a meeting?</h3>

          <p>
            Yes, simply mention your preferred date and
            time in the message.
          </p>

        </div>

        <div className="question">

          <h3>Do you offer technical support?</h3>

          <p>
            Absolutely! Our technical team is available
            Monday through Friday.
          </p>

        </div>

      </section>

      {/* Newsletter */}

      <section className="newsletter">

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
