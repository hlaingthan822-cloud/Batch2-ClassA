"use client";
import { useState } from "react";
import { useProducts } from "@/context/ProductContext";

export default function ProductsPage() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    if (editingId) {
      updateProduct(editingId, inputValue);
      setEditingId(null);
    } else {
      addProduct(inputValue);
    }
    setInputValue("");
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setInputValue(product.name);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter product name..."
        />
        <button type="submit">
          {editingId ? "Update Product" : "Add Product"}
        </button>
        {editingId && (
          <button
            onClick={() => {
              setEditingId(null);
              setInputValue("");
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <hr />

      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            {product.name}
            <button
              onClick={() => handleEdit(product)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>
            <button
              onClick={() => deleteProduct(product.id)}
              style={{ color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
