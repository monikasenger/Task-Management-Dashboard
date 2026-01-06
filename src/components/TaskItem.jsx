import { useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../features/tasks/tasksSlice";
import { useState } from "react";

import {
  FiTrash2,
  FiEdit,
  FiSave,
  FiCheckCircle,
  FiRotateCcw,
} from "react-icons/fi";

export default function TaskItem({ task }) {

  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(task.title);

  const toggleStatus = () => {
    dispatch(updateTask({
      ...task,
      status: task.status === "pending" ? "completed" : "pending"
    }));
  };

  const saveEdit = () => {
    dispatch(updateTask({ ...task, title }));
    setEditMode(false);
  };

  return (
  <div
    className="flex justify-between items-center p-4 rounded-2xl border shadow-sm
    bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
  >

    <div className="flex items-center gap-3">

      <span
        className={`px-2 py-1 text-xs font-semibold rounded-xl
        ${task.status === "completed"
          ? "bg-green-600 text-white"
          : "bg-yellow-400 text-black dark:text-gray-900"
        }`}
      >
        {task.status}
      </span>

      {editMode ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-xl px-2 py-1
          bg-white dark:bg-gray-700
          text-black dark:text-white
          border border-gray-300 dark:border-gray-600"
        />
      ) : (
        <p
          className={`font-medium
          text-gray-800 dark:text-gray-100
          ${task.status === "completed" ? "line-through opacity-70" : ""}`}
        >
          {task.title}
        </p>
      )}

    </div>


    <div className="flex gap-2">

      {editMode ? (
        <button
          onClick={saveEdit}
          className="p-2 rounded-xl bg-green-600 text-white hover:bg-green-700"
        >
          <FiSave />
        </button>
      ) : (
        <button
          onClick={() => setEditMode(true)}
          className="p-2 rounded-xl bg-yellow-500 text-black dark:text-white hover:bg-yellow-600"
        >
          <FiEdit />
        </button>
      )}

      <button
        onClick={toggleStatus}
        className="p-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700"
      >
        {task.status === "pending" ? <FiCheckCircle /> : <FiRotateCcw />}
      </button>

      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="p-2 rounded-xl bg-red-600 text-white hover:bg-red-700"
      >
        <FiTrash2 />
      </button>

    </div>

  </div>

  );
}
