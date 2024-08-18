import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import '../style/PurchaseConfirmation.css'; // Import CSS styles for the PurchaseConfirmation component

function PurchaseConfirmation({}) {
  const navigate = useNavigate(); // Initialize navigate function from react-router-dom

  // Function to navigate back to the products page
  const handleBackToProducts = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="purchase-confirmation-container"> {/* Container for the confirmation message */}
      <h1>Thank you for your purchase!</h1> {/* Main heading for the confirmation message */}
      <p>Your order has been successfully placed.</p> {/* Additional message confirming the order */}
      <button className="back-to-products-btn" onClick={handleBackToProducts}>
        Back to Products {/* Button text to go back to the products page */}
      </button>
    </div>
  );
}

export default PurchaseConfirmation;
