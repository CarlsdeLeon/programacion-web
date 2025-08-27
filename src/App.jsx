import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TaskItem from "./components/TaskItem";
import "./App.css"

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [taskName, setTaskName] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!taskName.trim()) return;
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
    setTaskName("");
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={addTask}>Agregar</button>

      <div>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("pending")}>Pendientes</button>
        <button onClick={() => setFilter("completed")}>Completadas</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}
