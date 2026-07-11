"use client";
import { useState } from "react";
import styles from "../page.module.css";

export default function TodoApp() {
  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    phone: "",
  });

  const [todos, setTodos] = useState([]);
  const [indexToUpdate, setIndexToUpdate] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add (Create)
  const addTodo = () => {
    if (!formData.name || !formData.rollno || !formData.phone) {
      return alert("Please fill all fields");
    }
    setTodos([...todos, formData]);
    setFormData({ name: "", rollno: "", phone: "" });
  };

  // Delete
  const deleteTodo = (index) => {
    const newList = todos.filter((_, i) => i !== index);
    setTodos(newList);
  };

  // Update
  const updateTodo = () => {
    const updateList = todos.map((item, i) =>
      i === indexToUpdate ? formData : item,
    );
    setTodos(updateList);
    setIndexToUpdate(null);
    setFormData({ name: "", rollno: "", phone: "" });
  };

  const showUpdateForm = indexToUpdate !== null;

  return (
    <div className={styles.container}>
      <h1>Student Information</h1>

      <div className={styles.formGroup}>
        <div className={styles.inputField}>
          <label>Name</label>
          <input
            name="name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputField}>
          <label>Roll No</label>
          <input
            name="rollno"
            className={styles.input}
            value={formData.rollno}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputField}>
          <label>Phone</label>
          <input
            name="phone"
            className={styles.input}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <button
          className={styles.addBtn}
          onClick={showUpdateForm ? updateTodo : addTodo}
        >
          {showUpdateForm ? "Save Changes" : "Register Student"}
        </button>

        {showUpdateForm && (
          <button
            className={styles.cancelBtn}
            onClick={() => {
              setIndexToUpdate(null);
              setFormData({ name: "", rollno: "", phone: "" });
            }}
          >
            Cancel
          </button>
        )}
      </div>

      <ul className={styles.list}>
        {todos.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <div className={styles.infoText}>
              <span>{item.name}</span>
              <span>Roll No: {item.rollno}</span>
              <span>Phone: {item.phone}</span>
            </div>
            <div className={styles.buttonGroup}>
              <button
                className={styles.editBtn}
                onClick={() => {
                  setIndexToUpdate(index);
                  setFormData(item);
                }}
              >
                Edit
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
