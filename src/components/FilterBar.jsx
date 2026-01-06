import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/tasks/tasksSlice";
import { FiFilter } from "react-icons/fi";

export default function FilterBar() {

  const { filter } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const filters = [
    { key: "all", label: "All" },
    { key: "completed", label: "Completed" },
    { key: "pending", label: "Pending" }
  ];

  return (
    <div className="mt-3 flex gap-2 items-center">

      {/* Filter Icon */}
      <FiFilter className="text-gray-700 dark:text-gray-200 text-lg" />

      {/* Filter Buttons */}
      {filters.map(btn => (
        <button
          key={btn.key}
          onClick={() => dispatch(setFilter(btn.key))}
          className={`px-3 py-1 rounded-2xl text-sm font-medium border transition
            ${
              filter === btn.key
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600"
            }`}
        >
          {btn.label}
        </button>
      ))}

    </div>
  );
}
