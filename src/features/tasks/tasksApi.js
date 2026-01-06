import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

export const fetchTasksApi = () => axios.get(API_URL);

export const addTaskApi = (task) => axios.post(API_URL, task);

export const updateTaskApi = (task) =>
  axios.put(`${API_URL}/${task.id}`, task);

export const deleteTaskApi = (id) =>
  axios.delete(`${API_URL}/${id}`);
