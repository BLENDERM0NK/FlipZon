import './App.css'; // Import global styles
import Header from './components/Header'; // Import the Header component
import ProductList from './components/ProductList'; // Import the ProductList component
import CartList from './components/CartList'; // Import the CartList component
import PurchaseConfirmation from './components/PurchaseConfirmation'; // Import the PurchaseConfirmation component
import { useState } from 'react'; // Import useState for managing state
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import { ToastContainer } from 'react-toastify'; // Import ToastContainer for toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

function App() {
  // State for managing product data
  const product = [
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://m.media-amazon.com/images/I/81fUFZqbmnL._SY695_.jpg',
      name: 'Gold Plated Premium Rakhi',
      category: 'Premium Rakhi',
      seller: 'Sukkhi Store',
      price: 199
    },
    {
      url: 'https://m.media-amazon.com/images/I/81TRdxk1wnL._SY741_.jpg',
      name: 'Cotton Ankle Length Socks',
      category: 'Socks for Men',
      seller: 'SJeware Store',
      price: 299
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://m.media-amazon.com/images/I/61okssN3Y6L._SX679_.jpg',
      name: 'Foldable Laptop Table',
      category: 'Study Table',
      seller: 'Rellon Store',
      price: 2000
    },
    {
      url: 'https://m.media-amazon.com/images/I/31Y1HG9d-DL._SX300_SY300_QL70_FMwebp_.jpg',
      name: 'Dumbbells',
      category: 'Fitness',
      seller: 'Lifelong Store',
      price: 399
    },
    {
      url: 'https://m.media-amazon.com/images/I/81OoEJe5TwL._SX679_.jpg',
      name: 'Office Chair',
      category: 'Home Decor',
      seller: 'Green Soul Store',
      price: 8599
    },
    {
      url: 'https://m.media-amazon.com/images/I/51NSC2qvOxL._SY879_.jpg',
      name: 'Men Cargo Pants',
      category: 'Fashion',
      seller: 'Lymio Store',
      price: 649
    },
  ];

  // State for managing cart items
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (data) => {
    // Check if the item is already in the cart
    const existingProductIndex = cart.findIndex((item) => item.name === data.name);

    if (existingProductIndex !== -1) {
      // If item is already in the cart, increase its quantity
      const updatedCart = cart.map((item, index) =>
        index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If item is not in the cart, add it with quantity 1
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    // Filter out the item at the given index
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Header count={cart.length} /> {/* Render the Header component with cart item count */}
      <Routes>
        {/* Route for the product list page */}
        <Route path="/" element={<ProductList product={product} addToCart={addToCart} />} />
        {/* Route for the cart page */}
        <Route path="/cart" element={<CartList cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
        {/* Route for the purchase confirmation page */}
        <Route path="/purchase-confirmation" element={<PurchaseConfirmation/>} />
      </Routes>
      <ToastContainer />  {/* Add this to enable toasts globally */}
    </Router>
  );
}

export default App;
