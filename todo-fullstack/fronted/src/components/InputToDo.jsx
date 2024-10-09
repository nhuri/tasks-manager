import React, { useContext, useState } from "react";
import TodoContext from "../context/todos";
import { useAddTaskMutation } from "../slices/taskApiSlice";
import Loader from "./Loader";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const InputToDo = () => {
  // const {addTask} = useContext(TodoContext)
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [addTask, { isLoading }] = useAddTaskMutation();

  const handleAddTask = async (e) => {
    e.preventDefault();
    const response = await addTask({
      title: inputTitle,
      body: inputBody,
      date: inputDate,
    }).unwrap();
  };
  return (
    <div className="newTask d-flex flex-column align-items-center">
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
        onChange={(e) => {
          setInputDate(e.target.value);
        }}
        type="text"
        placeholder="Enter the date"
      />
      <button onClick={handleAddTask}>Add Task</button>
      {isLoading && <Loader />}
    </div>
  );
};

export default InputToDo;
