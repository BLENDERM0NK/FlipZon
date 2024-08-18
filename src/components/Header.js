import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation between routes
import '../style/Header.css'; // Import CSS styles for the header


const Header = ({ count }) => {
  return (
    <header className="header-container"> {/* Container for the header */}
      <nav className="nav-bar"> {/* Navigation bar */}
        <Link to="/" className="nav-link">
          FLIPZON
        </Link>
        <Link to="/cart" className="nav-link cart-link"> {/* Link to the cart page */}
          Cart <span className="cart-count">({count})</span> {/* Display the number of items in the cart */}
        </Link>
      </nav>
    </header>
  );
};

export default Header;

