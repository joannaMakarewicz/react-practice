import React from "react";
import "./List.scss";

const List = ({task, taskCompleted}) => {

  return (
    <article>
      <h3>Your tasks:</h3>
      {task.map((element, index) => {
        return (
          <div className={`list ${element.isCompleted ? 'list__completed' : ''}`} key={index}>
            <p>{element.content}</p>
            <button>Done</button>
          </div>

        );
      })}
    </article>
  );
};

export default List;
