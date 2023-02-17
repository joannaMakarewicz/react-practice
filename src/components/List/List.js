import React from "react";
import ListButton from "../ListButton";
import "./List.scss";

const List = () => {
  const tasks = [ { content: "Zrób zakupy" }, { content: "Zrób obiad" }];

  return (
    <article>
      <h3>Your tasks:</h3>
      {tasks.map((task, index) => {
        return (
          <div className="list" key={index}>
            <p>{task.content}</p>
            <ListButton />
          </div>
        );
      })}
    </article>
  );
};

export default List;
