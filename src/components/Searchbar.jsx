import { useDispatch } from "react-redux";
import { setSearch } from "../features/tasks/tasksSlice";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {

  const dispatch = useDispatch();

  return (
    <div className="mt-4 flex items-center gap-2
      bg-gray-100 dark:bg-gray-800
      px-3 py-2 rounded-2xl shadow-sm
    ">

      <FiSearch className="text-gray-700 dark:text-gray-200 text-lg" />

      <input
        className="w-full bg-transparent outline-none text-sm
          text-gray-900 dark:text-gray-100
          placeholder-gray-500 dark:placeholder-gray-400
        "
        placeholder="Search tasks..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
}
