import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTasksApi, addTaskApi, updateTaskApi, deleteTaskApi } from "./tasksApi";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const res = await fetchTasksApi();
  return res.data;
});

export const addTask = createAsyncThunk("tasks/add", async (title) => {
  const newTask = { title, status: "pending" };
  const res = await addTaskApi(newTask);
  return res.data;
});

export const updateTask = createAsyncThunk("tasks/update", async (task) => {
  const res = await updateTaskApi(task);
  return res.data;
});

export const deleteTask = createAsyncThunk("tasks/delete", async (id) => {
  await deleteTaskApi(id);
  return id;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    filter: "all",
    search: "",
    loading: false,
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })

      .addCase(addTask.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.list.findIndex(t => t.id === action.payload.id);
        state.list[index] = action.payload;
      })

      .addCase(deleteTask.fulfilled, (state, action) => {
        state.list = state.list.filter(task => task.id !== action.payload);
      });
  },
});

export const { setFilter, setSearch } = tasksSlice.actions;
export default tasksSlice.reducer;
