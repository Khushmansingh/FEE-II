import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Checkout() {
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="page-shell">
      <div className="content-card checkout-card">
        <h1>Checkout</h1>

        {cartItems.length === 0 ? (
          <>
            <p>Your cart is empty. Add some products before checking out.</p>
            <Link to="/products" className="primary-button inline-link">
              Continue Shopping
            </Link>
          </>
        ) : (
          <>
            <div className="checkout-items">
              {cartItems.map((item) => (
                <div key={item.id} className="checkout-item">
                  <span>{item.name}</span>
                  <span>
                    {item.quantity} x ${item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-row total">
              <span>Order Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="primary-button wide-button">Place Order</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
