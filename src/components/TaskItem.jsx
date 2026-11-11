export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between border-b border-gray-200 py-2">
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.done ? "text-gray-400 line-through" : ""}>
          {task.text}
        </span>
        <span className="text-xs text-gray-400">({task.category})</span>
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="text-xs text-gray-400 hover:text-red-500"
      >
        delete
      </button>
    </li>
  );
}
