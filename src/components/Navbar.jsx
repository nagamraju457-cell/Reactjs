import { Link, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Login from "./Login"

import React from "react";


export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>CodeVerse</h2>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Login">Login</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login/>} />
    </Routes>
    </nav>
  );
}

