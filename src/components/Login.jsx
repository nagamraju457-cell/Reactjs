import React from 'react'
import './App.css';
import forest from "../assets/forest.jpeg"
export default function  Login() {
  return (
    <div className="form-container">
      <form className="login-container" >
          <h2>Welcome  to CVCORP</h2>
        
        <div className="input-group">
          <label><b>Name</b></label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>

        <div className="input-group">
          <label><b>Age</b></label>
          <input type="number" name="age" placeholder="Enter your age" />
        </div>

        <div className="input-group">
          <label><b>Email</b></label>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      
    </div>
  )
}
