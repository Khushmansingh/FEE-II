import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page-shell">
      <div className="content-card">
        <h1>About Our Store</h1>
        <p>
          Mini Cart is a modern lifestyle store offering handpicked products for everyday living,
          from tech essentials to stylish accessories and home upgrades.
        </p>
        <p>
          We believe great shopping should feel easy, clear, and enjoyable. Every item is chosen to
          balance quality, value, and design.
        </p>
        <Link to="/" className="primary-button inline-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default About;
