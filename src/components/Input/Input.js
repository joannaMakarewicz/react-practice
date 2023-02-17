import React, {useState} from "react";
import Button from "../Button";
import "./Input.scss";

const Input = () => {
 const [newTask, setNewTask] = useState('');

  return (
    <article className="input">
        <h2 className="input__header">Add your new task:</h2>
      <input className="input__input" onChange={(e) => {
        setNewTask(e.target.value)
      }}
      ></input>
      <Button/>
    </article>
  );
};

export default Input;
