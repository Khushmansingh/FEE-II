import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Home';
import Product from './Product';
import Cart from './Cart';
import About from './About';
import NotFound from './NotFound';
import Checkout from './Checkout';

function Navigation() {
  const cartItems = useSelector((state) => state.cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="brand">Mini Cart</div>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Products
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Cart
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
        </nav>

        <div className="cart-summary" aria-live="polite">
          <span>Items: {totalItems}</span>
          <span>Total: ${totalPrice.toFixed(2)}</span>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;

