import React, { useState } from "react";
import "./ListTask.scss";

const ListTask = ({ element }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const addCompleted = () => setIsCompleted(true);

  return (
    <div className={`list ${isCompleted ? "list__completed" : ""}`}>
      <p>{element.content}</p>
      <button onClick={addCompleted}>Done</button>
    </div>
  );
};

export default ListTask;
