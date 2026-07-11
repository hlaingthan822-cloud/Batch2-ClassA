"use client";
import { useMemo, useState } from "react";

const items = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Pineapple",
  "Watermelon",
  "Mango",
];
export default function UseMemoPage() {
  const [filter, setFilter] = useState("");

  //Heavy filtering logic (pretend it's expensive)
  const filteredItems = useMemo(() => {
    console.log("Filtering items..");
    return items.filter((item) =>
      item.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter]); //only runs when items or filter changes

  console.log("Render Component");
  return (
    <div style={{ padding: "40px", maxWidth: "500px" }}>
      <h1>UseMemo Filter Example</h1>
      <p>Type to filter the fruit list below:</p>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search by Filter"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <ul style={{ paddingLeft: "20px" }}>
        {filteredItems.map((item, index) => (
          <li key={index} style={{ marginBottom: "6px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}