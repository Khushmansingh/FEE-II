import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './features/cart/cartSlice';

function Product() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedMessage, setAddedMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=12');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        const mappedProducts = data.products.map((product) => ({
          id: product.id,
          name: product.title,
          price: product.price,
          category: product.category,
          image: product.thumbnail || product.images?.[0] || '',
        }));

        setProducts(mappedProducts);
      } catch (err) {
        setError('Unable to load products right now.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!addedMessage) return;

    const timer = setTimeout(() => {
      setAddedMessage('');
    }, 1500);

    return () => clearTimeout(timer);
  }, [addedMessage]);

  const categories = ['All', ...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedMessage(`${product.name} added to cart!`);
  };

  return (
    <div className="page-shell">
      <div className="section-header">
        <div>
          <p className="eyebrow">Curated picks</p>
          <h1>Products</h1>
        </div>
        {addedMessage && <div className="notice success">{addedMessage}</div>}
      </div>

      <div className="filter-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search products..."
          className="search-input"
        />

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          className="category-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="empty-state wide">Loading products...</div>}
      {error && <div className="empty-state wide">{error}</div>}

      {!loading && !error && (
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <button className="primary-button" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="empty-state wide">No products match your search.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Product;
