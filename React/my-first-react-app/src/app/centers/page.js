"use client";
import { useState } from "react";
import {useEffect} from "react";
export default function CenterList() {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://gescapi.ultimatesolutionmyanmar.com/api/centres")
      .then((res) => {
        console.log("Response status :" ,res);
        if (!res.ok) {
          throw new Error("filed to fetch centers");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data : ",data);
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
    return <p>Error:{error}</p>;
  }
  return (
    <div>
      <h1>Centers</h1>
      <ul>
        {centers.map((center) => (
          <li key={center.id}>
            <strong>{center.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
