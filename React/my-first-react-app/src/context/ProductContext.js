"use client";
import { createContext, useState, useContext } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
  ]);

  const addProduct = (name) => {
    const newProduct = { id: Date.now(), name };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id, newName) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, name: newName } : p)),
    );
  };

  // Delete
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}
export const useProducts = () => useContext(ProductContext);
