import { useState, useEffect } from "react";
import "../index.css"; 

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
    const task = { id: Date.now(), name: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>TAREAS</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>

      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Todas
        </button>
        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Pendientes
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completadas
        </button>
      </div>

      <ul className="tasks">
        {filteredTasks.map((t) => (
          <li key={t.id} className={t.completed ? "task-item done" : "task-item"}>
            <span>{t.name}</span>
            <div className="task-actions">
              <button
                className={t.completed ? "complete-btn completed" : "complete-btn"}
                onClick={() => toggleTask(t.id)}
              >
                {t.completed ? "✅ Completada" : "✔ Marcar"}
              </button>
              <button className="delete-btn" onClick={() => deleteTask(t.id)}>
                ❌ Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}