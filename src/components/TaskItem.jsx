export default function TaskItem({ task, toggleStatus, deleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {task.name}
      </span>
      <button onClick={() => toggleStatus(task.id)}>
        {task.completed ? "Pendiente" : "Completado"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
}
