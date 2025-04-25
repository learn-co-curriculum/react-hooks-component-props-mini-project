import React from "react";

function Task({ task, onDeleteTask }) {
  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className="task">
      <p>
        {task.text} <span className="category">{task.category}</span>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
