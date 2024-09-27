import React from 'react';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'lightgray' : 'black' }}>
          {task.text}
          <button onClick={() => toggleTask(index)}>{task.completed ? 'Deshacer' : 'Completar'}</button>
          <button onClick={() => deleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;