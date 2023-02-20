import React, { useState } from "react";
import "./Input.scss";

const Input = ({ input, setInput, addTask }) => {
  let [newTask, setNewTask] = useState("");

  return (
    <article className="input">
      <h2 className="input__header">Add your new task:</h2>

      <textarea
        className="input__input"
        onChange={(e) => {
          setNewTask(e.target.value);
          setInput(e.target.value);
        }}
        name="input"
        type="text"
        value={input}
      ></textarea>

      <button className="input__button"
        onClick={() => {
          addTask(newTask);
          setInput("");
          setNewTask("");
        }}
      >
        Add new
      </button>
    </article>
  );
};

export default Input;
