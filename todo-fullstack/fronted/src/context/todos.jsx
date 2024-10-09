import { createContext, useState } from "react";
import { useGetTasksByUserIdQuery } from "../slices/taskApiSlice";

const TodoContext = createContext();

const Provider = ({ children }) => {
  const [todoArr, setTodoArr] = useState();
  const [isLogin, setIsLogin] = useState();

  const completeTask = (id) => {
    console.log("add task");
  };
  const sortTasksBy = (sortBy) => {};
  const sharedVaribles = {
    todoArr,
    completeTask,
    sortTasksBy,
    isLogin,
    setIsLogin,
  };
  return (
    <TodoContext.Provider value={sharedVaribles}>
      {children}
    </TodoContext.Provider>
  );
};
export { Provider };
export default TodoContext;
