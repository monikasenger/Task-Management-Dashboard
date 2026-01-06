import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";

export default function App() {

  const { mode } = useSelector(state => state.theme);

  return (
    <div className={mode === "dark" ? "dark bg-gray-900 text-white min-h-screen" : "bg-white min-h-screen"}>
      <Dashboard />
    </div>
  );
}
