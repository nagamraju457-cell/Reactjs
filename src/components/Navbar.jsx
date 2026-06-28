import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Login from "./Login";


export default function Navbar() {
  return (
    <>
      <nav className="navbar">

        <div className="logo">
          <h2>🌿 Razz's World</h2>
        </div>

        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

        </ul>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}