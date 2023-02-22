import React from "react";
import ListTask from "../ListTask";
import "./List.scss";

const List = ({ task }) => {
  const singleTask = task.map((element) => (
    <ListTask element={element} key={element.id} />
  ));
  return (
    <article>
      <h3>Your tasks:</h3>
      {singleTask}
    </article>
  );
};

export default List;
