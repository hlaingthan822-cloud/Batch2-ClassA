"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [indexToUpdate, setIndexToUpdate] = useState(null);

  // Add (Create)
  const addTodo = () => {
    if (task.trim() === "") return alert("Please enter a task");
    setTodos([...todos, task]);
    setTask("");
  };
  // console.log("todos state data: ",todos);

  // Delete (Remove)
  const deleteTodo = (index) => {
    const newList = todos.filter((_, i) => i !== index);
    setTodos(newList);
  };

  // Edit (Update)
  const editTodo = (index) => {
    const newValue = prompt("Update item:", todos[index]);
    if (newValue === null || newValue.trim() === "") return;
    const updatedList = todos.map((item, i) => (i === index ? newValue : item));
    console.log("updatedList", updatedList);
    setTodos(updatedList);
  };

  const updateTodo = () => {
    if (task.trim() === "") return alert("Please enter a task");
    const updateList = todos.map((item, i) =>
      i === indexToUpdate ? task : item,
    );
    console.log("updateList", updateList);
    setTodos(updateList);
    setIndexToUpdate(null);
    setTask("");
  };
  const showUpdateForm = indexToUpdate !== null ? true : false;
  return (
    <div className={styles.containter}>
      <h1>Todo CRUD App</h1>

      {/* Input + Add Button  */}
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button
          className={styles.addBtn}
          onClick={() => {
            if (showUpdateForm) {
              updateTodo();
            } else {
              addTodo();
            }
          }}
        >
          {showUpdateForm ? "Update" : "Add"}
        </button>
        {showUpdateForm && (
          <button
            className={styles.addBtn}
            onClick={() => {
              setIndexToUpdate(null);
              setTask("");
            }}
          >
            Cancel
          </button>
        )}
      </div>

      {/* List */}
      <ul className={styles.list}>
        {todos.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <span>Index: {index}</span>
            <span>{item}</span>

            <div>
              <button
                className={styles.editBtn}
                onClick={() => {
                  console.log("clicked row item: ", item, "row index: ", index);
                  setIndexToUpdate(index);
                  setTask(item);
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
