import "./ShoppingCard.css"

const products = [
  {
    id: 1,
    name: "boAt Rockerz 450 Bluetooth Headphone",
    image: "https://i.pinimg.com/originals/06/d2/d7/06d2d746e5fdb898ebc454d245e83fa1.jpg",
    price: 1299,
    
  },
  {
    id: 2,
    name: "Noise ColorFit Pro 4 Smartwatch",
    image: "https://cdn1.smartprix.com/rx-iYKXux9GE-w280-h280/noise-colorfit-pro-4.webp",
    price: 2499,
   
  },
  {
    id: 3,
    name: "Samsung Galaxy M14 5G (Berry Blue, 128GB)",
    image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/305186_jo8oau.png",
    price: 10999,
   
  },
  {
    id: 4,
    name: "Lenovo IdeaPad Slim 3 Intel Core i5 Laptop",
    image: "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/312504_3_6bs16qKFk.png",
    price: 42990,
   
  },
  {
    id: 5,
    name: "Nike Revolution 6 Running Shoes For Men",
    image: "https://rukminim1.flixcart.com/image/1500/1500/xif0q/shoe/0/m/f/8-dc3728-401nike-9-nike-midnight-navy-white-obsidian-ashen-slate-original-imaghyyggtfhwqzy.jpeg?q=90",
    price: 2695,
    
  },
  {
    id: 6,
    name: "boAt Airdopes 141 TWS Earbuds",
    image: "https://www.myg.in/images/thumbnails/300/300/detailed/93/Airdopes_141_ANC-1-removebg-preview.png.png",
    price: 899,
   
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
