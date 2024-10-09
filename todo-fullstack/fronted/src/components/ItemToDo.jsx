import React, { useContext, useState } from "react";
import EditToDo from "./EditToDo";
import TodoContext from "../context/todos";
import {
  useDeleteTaskMutation,
  useGetTasksByUserIdQuery,
} from "../slices/taskApiSlice";

const ItemToDo = ({ id, title, body, date }) => {
  // const { deleteTask } = useContext(TodoContext);
  const [editMode, setEditMode] = useState(false);
  const [deleteTask] = useDeleteTaskMutation();
  const { refetch } = useGetTasksByUserIdQuery();

  const handleDeleteTask = async (e) => {
    const taskId = id;
    const response = await deleteTask({
      taskId,
    }).unwrap();
    refetch();
  };
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item" key={id}>
        <h2 className="accordion-header" id={`heading-${id}`}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${id}`}
            aria-expanded="true"
            aria-controls={`collapse-${id}`}
          >
            {title}
          </button>
        </h2>
        <div
          id={`collapse-${id}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading-${id}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-column">
            <div className="accordion-body d-flex flex-column">
              <h4>{body}</h4>
              <h4>{date}</h4>
            </div>

            <div className="d-flex justify-content-center">
              <button
                onClick={() => {
                  handleDeleteTask();
                }}
              >
                Delete Task
              </button>

              <button
                onClick={() => {
                  if (editMode == false) setEditMode(true);
                  else setEditMode(false);
                }}
              >
                Edit Task
              </button>
            </div>
          </div>
        </div>
      </div>

      {editMode && <EditToDo id={id} />}
    </div>

    // <div className="accordion" id="accordionExample">
    //   <div className="accordion-item">
    //     <h2 className="accordion-header" id={`heading-${id}`}>
    //       <button
    //         className="accordion-button"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target={`#collapse${id}`}
    //         aria-expanded="true"
    //         aria-controls={`collapse${id}`}
    //       >
    //         {title}
    //       </button>
    //     </h2>
    //     <div
    //       id={`collapse-${id}`}
    //       className="accordion-collapse collapse show"
    //       aria-labelledby={`heading-${id}`}
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div className="accordion-body">
    //         {body}
    //         {date}
    //       </div>
    //     </div>
    //     <button
    //       onClick={() => {
    //         handleDeleteTask();
    //       }}
    //     >
    //       Delete Task
    //     </button>

    //     <button
    //       onClick={() => {
    //         if (editMode == false) setEditMode(true);
    //         else setEditMode(false);
    //       }}
    //     >
    //       Edit Task
    //     </button>
    //   </div>
    //   {editMode && <EditToDo id={id} />}
    // </div>

    // </div>
    // <div className="card">
    //   <div className="accordion-item">
    //     <div className="accordion-header">
    //       <strong>
    //         <h2>{title}</h2>
    //       </strong>
    //     </div>
    //     <div
    //       id="collapseOne"
    //       className="accordion-collapse collapse show"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div className="accordion-body">
    //         <h4>{body}</h4>
    //         <h5>{date}</h5>
    //       </div>
    //     </div>
    //     <button
    //       className="accordion-button"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#collapseOne"
    //       aria-expanded="true"
    //       aria-controls="collapseOne"
    //     >
    //       press
    //     </button>
    //     <button
    //       onClick={() => {
    //         handleDeleteTask();
    //       }}
    //     >
    //       Delete Task
    //     </button>

    //     <button
    //       onClick={() => {
    //         if (editMode == false) setEditMode(true);
    //         else setEditMode(false);
    //       }}
    //     >
    //       Edit Task
    //     </button>
    //   </div>
    //   {editMode && <EditToDo id={id} />}
    // </div>
  );
};

export default ItemToDo;
