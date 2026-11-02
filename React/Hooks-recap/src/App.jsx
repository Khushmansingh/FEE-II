import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import Dadjokes from './Dadjokes'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Product">Product</Link>
        <Link to="/Dadjokes">Dad_Jokes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Dadjokes" element={<Dadjokes />} />
      </Routes>
    </BrowserRouter>
  )
} 

export default App
