import React, { useContext } from "react";
import { useState } from "react";
import TodoContext from "../context/todos";

const EditToDo = ({ id }) => {
  const { editTask } = useContext(TodoContext);
  const [inputId, setInputId] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [inputDate, setInputDate] = useState("");
  // console.log(inputId,);

  const handleEditTask = () => {
    const task = {
      id,
      title: inputTitle,
      body: inputBody,
      date: inputDate,
    };
    editTask(id, inputTitle, inputBody, inputDate);
  };
  return (
    <div className="newTask">
      <h2>Add a new task</h2>
      <input
        onChange={(e) => setInputTitle(e.target.value)}
        type="text"
        placeholder="Enter the title"
      />
      <input
        onChange={(e) => setInputBody(e.target.value)}
        type="text"
        placeholder="Enter the body"
      />
      <input
        onChange={(e) => setInputDate(e.target.value)}
        type="text"
        placeholder="Enter the date"
      />
      <button onClick={handleEditTask}>Add Task</button>
    </div>
  );

  // const { editTask } = useContext(TodoContext);
  // const handleEditTask = (e) => {
  //   const id = e.target.parentNode.children[0].value;
  //   const title = e.target.parentNode.children[1].value;
  //   const body = e.target.parentNode.children[2].value;
  //   const date = e.target.parentNode.children[3].value;
  //   editTask(id, title, body, date);
  // };
  // return (
  //   <div>
  //     <input type="text" placeholder="Enter the id" />
  //     <input type="text" placeholder="Enter the title" />
  //     <input type="text" placeholder="Enter the body" />
  //     <input type="text" placeholder="Enter the date" />
  //     <button onClick={handleEditTask}>Edit Task</button>
  //   </div>
  // );
};

export default EditToDo;
