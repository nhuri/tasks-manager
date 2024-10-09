import { createContext, useState } from "react";
import tasks from "../tasks";

const TodoContext = createContext();

const Provider = ({ children }) => {
  const [todoArr, setTodoArr] = useState(tasks);
  const addTask = (task) => {
    console.log("add task");
  };
  const editTask = (id, title, body, date) => {
    console.log(id, title, body, date);

    setTodoArr(
      todoArr.map((task) => {
        if (task.id === id) {
          task.title = title ? title : task.title;
          task.body = body ? body : task.body;
          task.date = date ? date : task.date;
        }
        return task;
      })
    );
  };
  const deleteTask = (id) => {
    setTodoArr(todoArr.filter((task) => task.id !== id));
    console.log(id);
  };
  const completeTask = (id) => {
    console.log("add task");
  };
  const sortTasksBy = (sortBy) => {};
  const sharedVaribles = {
    todoArr,
    addTask,
    editTask,
    deleteTask,
    completeTask,
    sortTasksBy,
  };
  return (
    <TodoContext.Provider value={sharedVaribles}>
      {children}
    </TodoContext.Provider>
  );
};
export { Provider };
export default TodoContext;
