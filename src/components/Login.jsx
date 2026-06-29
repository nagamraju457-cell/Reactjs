import React, { useState } from "react";
import forest from "../assets/forest.jpeg";
import 'animate.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
 useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false
      });
    }, []);

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email === "" || form.password === "") {
      alert("Please fill all fields.");
      return;
    }

    alert("Login Successful!");

    setForm({
      email: "",
      password: "",
      remember: false,
    });
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${forest})`,
      }}
    >
      {/* Floating Circles */}

      <div className="circle one"></div>
      <div className="circle two"></div>
      <div className="circle three"></div>

      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p>
          Login to continue your journey.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-box" data-aos="fade-right">
            <span>📧</span>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-box" data-aos="fade-left">
            <span>🔒</span>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <button
              type="button"
              className="eye-btn" data-aos="slide-up"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          <div className="options">

            <label>
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
              />
              Remember Me
            </label>

            <a href="#">Forgot Password?</a>

          </div>

          <button className="login-btn">
            Login
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-login">

          <button>🌐 Google</button>

          <button>💻 GitHub</button>

          <button>📘 Facebook</button>

        </div>

        <div className="register">

          <p>
            Don't have an account?
            <a href="#"> Register</a>
          </p>

        </div>

      </div>
    </div>
  );
}