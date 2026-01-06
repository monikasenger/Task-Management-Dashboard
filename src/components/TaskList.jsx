import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskList() {

  const { list, filter, search } = useSelector(state => state.tasks);

  const filtered = list.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "all" || task.status === filter)
  );

  return (
    <div className="mt-5 flex flex-col gap-3">

      {filtered.length ? (
        filtered.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      ) : (
        <p className="text-center opacity-60 mt-4">
          No tasks found
        </p>
      )}

    </div>
  );
}
