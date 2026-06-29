
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Login from './components/login'
import './components/App.css';
import 'animate.css';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  
   
   <div> <Navbar /></div>
   
   </>
  )
}

export default App
