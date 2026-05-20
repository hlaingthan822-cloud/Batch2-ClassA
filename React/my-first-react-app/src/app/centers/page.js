"use client";

import { useState, useEffect } from "react";

export default function CenterList() {
  const [centres, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://gescapi.ultimatesolutionmyanmar.com/api/centres")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch centers");
        }
        return res.json();
      })
      .then((data) => {
        setCenters(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {centres.map((center) => (
        <div
          key={center.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
          }}
        >
          <h2 style={{ marginBottom: "15px", color: "#333" }}>{center.name}</h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <label>
              <strong>Name:</strong>
              {center.name}
            </label>
            <label>
              <strong>Address:</strong> {center.address}
            </label>

            <label>
              <strong>Centre Code:</strong> {center.centre_code}
            </label>

            <label>
              <strong>Contact:</strong> {center.contact_phones}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
