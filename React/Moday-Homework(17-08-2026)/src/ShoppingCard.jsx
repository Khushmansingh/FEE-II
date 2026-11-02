import "./ShoppingCard.css"

const products = [
  {
    id: 1,
    name: "boAt Rockerz 450 Bluetooth Headphone",
    image: "https://placehold.co/200x200/e8e8e8/555?text=Headphone",
    price: 1299,
    originalPrice: 3990,
    rating: 4.2,
    discount: 67,
  },
  { 
    id: 2,
    name: "Noise ColorFit Pro 4 Smartwatch",
    image: "https://placehold.co/200x200/e8e8e8/555?text=Smartwatch",
    price: 2499,
    originalPrice: 5999,
    rating: 4.1,
    discount: 58,
  },
  {
    id: 3,
    name: "Samsung Galaxy M14 5G (Berry Blue, 128GB)",
    image: "https://placehold.co/200x200/e8e8e8/555?text=Phone",
    price: 10999,
    originalPrice: 16999,
    rating: 4.3,
    discount: 35,
  },
  {
    id: 4,
    name: "Lenovo IdeaPad Slim 3 Intel Core i5 Laptop",
    image: "https://placehold.co/200x200/e8e8e8/555?text=Laptop",
    price: 42990,
    originalPrice: 68990,
    rating: 4.4,
    discount: 38,
  },
  {
    id: 5,
    name: "Nike Revolution 6 Running Shoes For Men",
    image: "https://placehold.co/200x200/e8e8e8/555?text=Shoes",
    price: 2695,
    originalPrice: 3695,
    rating: 4.3,
    discount: 27,
  },
  {
    id: 6,
    name: "boAt Airdopes 141 TWS Earbuds",
    image: "https://placehold.co/200x200/e8e8e8/555?text=Earbuds",
    price: 899,
    originalPrice: 4490,
    rating: 4.0,
    discount: 80,
  },
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="card-image" />
      <h3 className="card-title">{product.name}</h3>
      <div className="card-price-row">
        <span className="current-price">₹{product.price}</span>
      </div>
      <button className="btn-add-cart">Add to Cart</button>
      <button className="btn-add-cart">Buy Now</button>
    </div>
  );
}

function ShoppingCard() {
  return (
    <div className="shopping-section">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingCard;
