import React, { useContext, useState } from "react";
import EditToDo from "./EditToDo";
import TodoContext from "../context/todos";

const ItemToDo = ({ id, title, body, date }) => {
  const { deleteTask } = useContext(TodoContext);
  const [editMode, setEditMode] = useState(false);
  const handleTogleEditMode = () => {};
  return (
    <div className="card">
      <div className="accordion-item">
        <div className="accordion-header">
          <h2>{id}</h2>
          <h2>{title}</h2>
          <h2>{date}</h2>
        </div>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>{body}</strong>
          </div>
        </div>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          press
        </button>
        <button
          onClick={() => {
            deleteTask(id);
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
      {editMode && <EditToDo id={id} />}
    </div>
  );
};

export default ItemToDo;
