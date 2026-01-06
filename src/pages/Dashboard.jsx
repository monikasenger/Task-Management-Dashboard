import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../features/tasks/tasksSlice";

import ThemeToggle from "../components/ThemeToggle";
import SearchBar from "../components/Searchbar";
import FilterBar from "../components/FilterBar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="max-w-3xl mx-auto p-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Management Dashboard</h1>
        <ThemeToggle />
      </div>

      <SearchBar />
      <FilterBar />
      <TaskForm />
      <TaskList />

    </div>
  );
}
