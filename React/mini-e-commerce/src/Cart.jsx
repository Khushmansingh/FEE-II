import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from './features/cart/cartSlice';

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="page-shell">
        <div className="content-card empty-state">
          <h1>Your cart is empty</h1>
          <p>Add a few products to get started.</p>
          <Link to="/products" className="primary-button inline-link">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell cart-layout">
      <div className="cart-items-panel content-card">
        <h1>Shopping Cart</h1>

        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />

            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)} each</p>
            </div>

            <div className="quantity-controls" aria-label={`Quantity controls for ${item.name}`}>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            </div>

            <div className="cart-item-actions">
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <aside className="checkout-panel content-card">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <button className="primary-button wide-button" onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </button>
        <button className="secondary-button wide-button" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </aside>
    </div>
  );
}

export default Cart;