import React, { useState } from "react";
import Input from "../Input";
import List from "../List";
import "./Tasks.scss";

const Tasks = () => {
  const [task, setTask] = useState([
    { id: Math.random(), content: "Zrób zakupy" },
    { id: Math.random(), content: "Zrób obiad" },
    { id: Math.random(), content: "Ubierz choinkę" },
  ]);

  let [input, setInput] = useState("");

  const addTask = (e) => {
    e ? setTask([{ id: Math.random(), content: e }, ...task]) : setTask(task);
  };

  return (
    <section className="tasks">
      <Input input={input} setInput={setInput} addTask={addTask} />
      <List task={task} />
    </section>
  );
};

export default Tasks;
