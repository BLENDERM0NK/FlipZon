import '../style/ProductList.css'; // Import the CSS file for styling the ProductList component
import { toast } from 'react-toastify'; // Import toast for displaying notifications

function ProductList({ product, addToCart }) {
  // Function to handle adding an item to the cart
  const handleAddToCart = (item) => {
    addToCart(item); // Call addToCart to add the item to the cart
    // Display a success toast notification
    toast.success(`${item.name} added to cart!`, {
      autoClose: 2000, // Automatically close the toast after 2 seconds
    });
  };

  return (
    <div className='flex'>
      {product.map((item, index) => (
        <div key={index} style={{ width: '33%' }} className='product-card'>
          <img src={item.url} alt={`Product ${index}`} width="100%" />
          <p>{item.name} | {item.category}</p>
          <p>{item.seller}</p>
          <p>Rs.{item.price} \-</p>
          <button onClick={() => handleAddToCart(item)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
