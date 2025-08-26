import { useState, useEffect } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all"); 

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      id: Date.now(),
      name: newTask,
      completed: false,
    };
    setTasks((prev) => [...prev, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true; 
  });

  return (
    <div style={{ maxWidth: "400px", margin: "auto", fontFamily: "sans-serif" }}>
      <h1>📌 TODO List</h1>

      <div style={{ display: "flex", gap: "5px" }}>
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("pending")}>Pendientes</button>
        <button onClick={() => setFilter("completed")}>Completadas</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
        {filteredTasks.map((t) => (
          <li
            key={t.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
              textDecoration: t.completed ? "line-through" : "none",
            }}
          >
            <span onClick={() => toggleTask(t.id)} style={{ cursor: "pointer" }}>
              {t.name}
            </span>
            <button onClick={() => deleteTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}