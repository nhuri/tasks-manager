import { useContext, useEffect, useState } from "react";
import ItemToDo from "./ItemToDo";
import TodoContext from "../context/todos";
import { useGetTasksByUserIdQuery } from "../slices/taskApiSlice";
const ListToDo = () => {
  const { isLogin } = useContext(TodoContext);
  const { todoArr, setTodoArr } = useContext(TodoContext);
  const { data, refetch } = useGetTasksByUserIdQuery(undefined, {
    skip: !isLogin,
  });
  // console.log(data?.document);

  useEffect(() => {
    if (isLogin) {
      refetch();
    }
  }, [isLogin, refetch]);
  return (
    <div className="column">
      {data?.document.map((task) => (
        <ItemToDo
          key={task._id}
          id={task._id}
          title={task.title}
          body={task.body}
          date={task.date}
        />
      ))}
    </div>
  );
};

export default ListToDo;
