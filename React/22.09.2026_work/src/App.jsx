import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Products from './Products.jsx'
import Productdetails from './Productdetails.jsx'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<Productdetails />} />
      </Routes>
    </>
  )
}

export default App
