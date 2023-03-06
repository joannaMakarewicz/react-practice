import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar";
import Tasks from "../../components/Tasks/Tasks";
import "./ToDoList.scss";

const ToDoList = () => {
  return (
    <main className="toDoList">
      <Navbar />
      <Header />
      <div className="toDoList__container">
        <Tasks />
      </div>
    </main>
  );
};

export default ToDoList;
