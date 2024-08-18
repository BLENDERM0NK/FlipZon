import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/CartList.css';

function CartList({ cart, removeFromCart }) {
  const [CART, setCART] = useState([]); // State to hold filtered cart items
  const [discount, setDiscount] = useState(0); // State to hold the current discount value
  const navigate = useNavigate(); // Hook for navigation

  // URL for the empty cart image
  const emptyCartImage = 'https://png.pngtree.com/png-clipart/20190617/original/pngtree-hand-painted-trolley-empty-cart-daily-supplies-png-image_3892416.jpg';

  // useEffect to update CART when cart prop changes
  useEffect(() => {
    const filteredCart = cart.filter(item => item.quantity > 0); // Filter out items with quantity <= 0
    setCART(filteredCart); // Update CART state with filtered items
  }, [cart]);

  // Function to calculate the subtotal (sum of item prices * quantities)
  const calculateSubtotal = () => {
    return CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0);
  };

  // Function to calculate the total after applying discount
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - discount;
  };

  // Function to update the quantity of a specific item
  const updateQuantity = (index, delta) => {
    const updatedCart = CART.map((cartItem, cartIndex) => {
      if (index === cartIndex) {
        const newQuantity = cartItem.quantity + delta;
        return newQuantity > 0 ? { ...cartItem, quantity: newQuantity } : null; // Return item with adjusted quantity or null
      }
      return cartItem;
    }).filter(item => item !== null); // Filter out null items

    setCART(updatedCart); // Update CART state with new cart
  };

  // Function to handle checkout and navigate to the purchase confirmation page
  const handleCheckout = () => {
    navigate('/purchase-confirmation');
  };

  // Function to navigate back to the products page
  const handleGoToProducts = () => {
    navigate('/');
  };

  return (
    <div className="cart-container">
      {CART.length === 0 ? (
        // Displayed when cart is empty
        <div className="empty-cart">
          <img src={emptyCartImage} alt="Empty Cart" />
          <p>Your cart is empty</p>
          <button className="back-to-products-btn" onClick={handleGoToProducts}>
            Add Products
          </button>
        </div>
      ) : (
        <>
          {/* Displayed when there are items in the cart */}
          {CART.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.url} alt={item.name} width={40} />
              <span>{item.name}</span>
              <div>
                <button onClick={() => updateQuantity(index, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(index, 1)}>+</button>
              </div>
              <span className="price">Rs. {item.price * item.quantity}</span>
              <button className="remove-btn" onClick={() => removeFromCart(index)}>X</button>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Subtotal: Rs. {calculateSubtotal()}</p>

            <div className="discount-section">
              <label htmlFor="discount">Apply Discount:</label>
              <select
                id="discount"
                onChange={(e) => {
                  const selectedDiscount = Number(e.target.value);
                  if (selectedDiscount === 0.1) {
                    // Apply 10% discount
                    setDiscount(calculateSubtotal() * 0.1);
                  } else {
                    setDiscount(selectedDiscount); // Apply selected discount
                  }
                }}
                value={discount}
              >
                <option value="0">No Discount</option>
                <option value="10">Rs. 10 off</option>
                <option value="100">Rs. 100 off</option>
                <option value="0.1">10% off</option>
              </select>
            </div>

            <p>Total (after discount): Rs. {calculateTotal()}</p>

            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartList;
