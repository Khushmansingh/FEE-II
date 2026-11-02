import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Login from './Login.jsx'
import Product from './Product.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import Getname from './Getname.jsx'
import Displaydata from './Displaydata.jsx'
import Productdetails from './Productdetails.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/productdetails/:id" element={<Productdetails/>}/>
      </Routes>
    </BrowserRouter>

    <Getname/>
    <Displaydata/>
    </>
  )
}

export default App
