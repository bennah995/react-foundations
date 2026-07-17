import { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  }

  function toggleTask(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        placeholder="New task..."
      />
      <button onClick={addTask}>Add</button>
      {tasks.length === 0 ? (
        <p>No tasks yet -- add your first one above</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                onClick={() => toggleTask(task.id)}
                style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
              >
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      <p>{tasks.filter((t) => !t.completed).length} tasks remaining</p>
    </div>
  );
}

export default TaskManager;