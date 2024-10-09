import React, { useContext } from "react";
import TodoContext from "../context/todos";

const InputToDo = () => {
  const { addTask } = useContext(TodoContext);
  return <div>InputToDo</div>;
};

export default InputToDo;
