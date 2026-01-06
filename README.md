# Task Management Dashboard

A **modern Task Management Dashboard** built with **React.js**, **Redux Toolkit**, and **Tailwind CSS**.  
This application allows users to **add, edit, delete, search, filter tasks**, and toggle between **Light / Dark mode**.

---
## 🚀 Deployment

- **Live Link:** [link](https://task-management-dashboard-yqyc.onrender.com)


---

## 🎯 Features

- **Task Management**
  - Add, edit, delete tasks
  - Mark tasks as **Pending** or **Completed**
  - Filter tasks by status (**All, Completed, Pending**)
  - Search tasks by title (works with filter)

- **User Interface**
  - Responsive design (works on mobile & desktop)
  - Dark / Light theme toggle
  - Modern UI with icons and hover effects

- **State Management**
  - Redux Toolkit for global state
  - Actions: addTask, updateTask, deleteTask, setFilter, setSearch

- **Mock API**
  - Simulates fetching tasks (no real backend required)
  - Can be easily replaced with real API later

---

## 🛠️ Technology Stack

- **Frontend:** React.js (Functional Components + Hooks)
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Mock API:** JSON Server / Static data
- **Optional:** Framer Motion (for animations)

---

## ⚡ Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/Task-Management-Dashboard.git
cd task-management-dashboard
```
2. **Install dependencies**
```bash
npm install
```
3. **Start development server**
```bash
npm start
```
3. **Open app in browser**
```bash
http://localhost:3000
```
4. **Build for production**
```bash
npm run build
```
---

## 💻 Project Structure
```bash
src/
├── app/
│ └── store.js
├── features/tasks/
│ ├── tasksSlice.js
│ ├── tasksApi.js (mock API)
├── components/
│ ├── TaskItem.jsx
│ ├── TaskList.jsx
│ ├── TaskForm.jsx
│ ├── FilterBar.jsx
│ ├── SearchBar.jsx
│ ├── ThemeToggle.jsx
├── pages/
│ └── Dashboard.jsx
├── styles/
└── App.jsx

