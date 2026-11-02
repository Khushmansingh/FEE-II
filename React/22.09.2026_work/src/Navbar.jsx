import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="bname">Amazon</div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </div>

      <button className="lbuttton">Login</button>
    </nav>
  )
}

export default Navbar