import React, { useContext } from "react";
import { useState } from "react";
import TodoContext from "../context/todos";
import {
  useEditTaskMutation,
  useGetTasksByUserIdQuery,
} from "../slices/taskApiSlice";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const EditToDo = ({ id }) => {
  const { isLogin, setIsLogin } = useContext(TodoContext);
  // let { editTask } = useContext(TodoContext);
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [editTask] = useEditTaskMutation();
  const { refetch } = useGetTasksByUserIdQuery();

  const handleEditTask = async (e) => {
    e.preventDefault();
    const taskId = id;
    const response = await editTask({
      taskId,
      data: {
        title: inputTitle,
        body: inputBody,
        date: inputDate,
      },
    }).unwrap();
    refetch();
  };
  return (
    <div className="editTask">
      <h2>Edit the task</h2>
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
      <button onClick={handleEditTask}>Edit Task</button>
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
