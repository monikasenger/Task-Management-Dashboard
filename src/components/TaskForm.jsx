import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { FiPlus } from "react-icons/fi";

export default function TaskForm() {

  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(addTask(title));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex gap-3">

      <input
        className="w-full border rounded-2xl px-3 py-2
          bg-gray-100 dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          placeholder-gray-500 dark:placeholder-gray-400
          outline-none focus:ring-2 focus:ring-blue-400
        "
        placeholder="Enter task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        type="submit"
        className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
      >
        <FiPlus />
        Add
      </button>

    </form>
  );
}
