import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-shell">
      <section className="hero-section content-card">
        <p className="eyebrow">Fresh finds, everyday essentials</p>
        <h1>Welcome to Mini Cart</h1>
        <p>
          Explore standout products, build your cart, and shop with confidence in a simple,
          stylish storefront.
        </p>

        <div className="hero-actions">
          <button className="primary-button" onClick={() => navigate('/products')}>
            Browse Products
          </button>
          <button className="secondary-button" onClick={() => navigate('/cart')}>
            View Cart
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
