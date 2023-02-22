import React, { useState } from "react";
import "./ListTask.scss";

const ListTask = ({ element }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const addCompleted = () => setIsCompleted(!isCompleted);

  return (
    <div className={`list ${isCompleted ? "list__completed" : ""}`}>
      <p className="listTask__heading">{element.content}</p>
      <button className="listTask__button" onClick={addCompleted}>Done</button>
    </div>
  );
};

export default ListTask;
