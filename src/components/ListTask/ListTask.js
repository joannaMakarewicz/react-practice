import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import "./ListTask.scss";

const ListTask = ({ element }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const addCompleted = () => setIsCompleted(!isCompleted);

  return (
    <div className={`list ${isCompleted ? "list__completed" : ""}`}>
      <p className="listTask__heading">{element.content}</p>
      <div className="listTask__button">
        <FiCheck className="listTask__icon" onClick={addCompleted} />
      </div>
    </div>
  );
};

export default ListTask;
