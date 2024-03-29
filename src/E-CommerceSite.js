import React, { useState } from 'react';

const EComerceSite = () => {
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new product object
    const newProduct = {
      category,
      productName,
      price,
      id: new Date().getTime(), // Assign a unique ID (you might want to use a more robust solution in a real application)
    };

    // Update the products state with the new product
    setProducts([...products, newProduct]);

    // Reset the form fields
    setCategory('');
    setProductName('');
    setPrice('');
  };

  const handleDelete = (productId) => {
    // Filter out the product with the given ID
    const updatedProducts = products.filter((product) => product.id !== productId);

    // Update the products state without the deleted product
    setProducts(updatedProducts);
  };

  const handleEdit = (productId) => {
    // Find the product with the given ID
    const productToEdit = products.find((product) => product.id === productId);

    // Set the form fields with the values from the product to edit
    setCategory(productToEdit.category);
    setProductName(productToEdit.productName);
    setPrice(productToEdit.price);

    // Delete the product from the list
    handleDelete(productId);
  };

  return (
    <div>
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange} required>
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </div>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          
          <li key={product.id}>
            {product.category} - {product.productName} - ${product.price}
            <button onClick={() => handleEdit(product.id)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default EComerceSite;