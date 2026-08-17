import Logo from './assets/Logo.png'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navlogo" src={Logo} alt="Logo" />
      <input placeholder="Search" id="searchbar" type="text" />
      <div className="nav-right">
        <button id="loginbtn">Login</button>
        <button id="morebtn">More</button>
        <button id="cartbtn">Cart</button>
      </div>
    </nav>
  )
}

export default Navbar;