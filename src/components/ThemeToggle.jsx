import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {

  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="
        flex items-center gap-2 px-4 py-2 rounded-2xl
        border border-gray-300 dark:border-gray-600
        bg-gray-100 dark:bg-gray-800
        text-gray-800 dark:text-gray-100
        hover:bg-gray-200 dark:hover:bg-gray-700
        font-medium shadow-sm transition-all duration-200
      "
    >
      {mode === "dark" ? (
        <>
          <FiMoon className="text-blue-300" />
          Dark Mode
        </>
      ) : (
        <>
          <FiSun className="text-yellow-500" />
          Light Mode
        </>
      )}
    </button>
  );
}
