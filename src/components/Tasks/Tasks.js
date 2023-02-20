import React, { useState } from "react";
import Input from "../Input";
import List from "../List";
import "./Tasks.scss";

const Tasks = () => {
  const [task, setTask] = useState([
    { id: "1", content: "Zrób zakupy", isCompleted: true },
    { id: "2", content: "Zrób obiad", isCompleted: false },
    { id: "3", content: "Ubierz choinkę", isCompleted: false },
  ]);

  let [input, setInput] = useState("");

  const addTask = (e) => {
    e ? setTask([{ content: e }, ...task]) : setTask(task);
  };


  return (
    <section className="tasks">
      <Input input={input} setInput={setInput} addTask={addTask} />
      <List task={task} />
    </section>
  );
};

export default Tasks;
