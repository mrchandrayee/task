import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("All");

  function addTask(text, category) {
    setTasks([...tasks, { id: Date.now(), text, category, done: false }]);
  }

  function toggleTask(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  const visibleTasks =
    filter === "All" ? tasks : tasks.filter((t) => t.category === filter);

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="mb-1 text-xl font-semibold">Task Tracker</h1>
      <p className="mb-6 text-sm text-gray-500">
        {tasks.filter((t) => !t.done).length} tasks left
      </p>

      <TaskForm onAdd={addTask} />

      <div className="my-4">
        <CategoryFilter active={filter} onChange={setFilter} />
      </div>

      <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}
