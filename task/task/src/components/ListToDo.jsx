import { useContext, useEffect } from "react";
import ItemToDo from "./ItemToDo";
import TodoContext from "../context/todos";
const ListToDo = () => {
  const { todoArr, setTodoArr } = useContext(TodoContext);
  // useEffect(() => {
  //   setTodoArr(todoArr);
  //   // console.log(todoArr);
  // }, []);
  return (
    <div className="column">
      {todoArr?.map((task) => (
        <ItemToDo
          key={task.id}
          id={task.id}
          title={task.title}
          body={task.body}
          date={task.date}
        />
      ))}
    </div>
  );
};

export default ListToDo;
