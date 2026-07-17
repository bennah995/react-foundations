import { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

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

  // Filter tasks dynamically based on active filter state
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true; // "All"
  });

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        placeholder="New task..."
      />
      <button onClick={addTask}>Add</button>

      {/* Filter Buttons Navigation */}
      <div style={{ margin: "15px 0" }}>
        {["All", "Active", "Completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{
              marginRight: "5px",
              fontWeight: filter === type ? "bold" : "normal",
              backgroundColor: filter === type ? "#0d7a01" : "#3c3c3c",
              border: "1px solid #ccc",
              padding: "4px 8px",
              cursor: "pointer"
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {filteredTasks.length === 0 ? (
        <p>No {filter.toLowerCase()} tasks found.</p>
      ) : (
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <span
                onClick={() => toggleTask(task.id)}
                style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
              >
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      <p>{tasks.filter((t) => !t.completed).length} tasks remaining</p>
    </div>
  );
}

export default TaskManager;
