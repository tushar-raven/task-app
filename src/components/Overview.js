import React, { useState } from "react";

const Overview = (props) => {
  const { tasks, deleteTask } = props;

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <>
            <div>{index + 1}</div>
            <li key={task.id}>{task.text}</li>
            <div onClick={() => deleteTask(index)}>X</div>
          </>
        );
      })}
    </ul>
  );
};

export default Overview;
