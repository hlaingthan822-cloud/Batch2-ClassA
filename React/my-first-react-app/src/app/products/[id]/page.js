"use client";
import React from "react";
export default function ProductPage({ params }) {
  const { id } = React.use(params);
  return <h1>Product ID: {id} </h1>;
}
