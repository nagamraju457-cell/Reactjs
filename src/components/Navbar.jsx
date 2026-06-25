import { Link, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Login from "./Login"



function Navbar() {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="/Login">Login</Link>
    

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login/>} />
    </Routes>
     </>
  )
}

export default Navbar