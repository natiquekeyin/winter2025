import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import UState from "./components/topics/UState";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
      console.log(await fetch("http://localhost:5000/tasks/2"));
    };

    getTasks();
  }, []);

  // Fetching the tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");

    const data = await res.json();

    return data;
  };

  // Fetch the task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);

    const data = await res.json();
    return data;
  };

  // Delete a task

  const deleteTask = async (id) => {
    // go and use the setTasks and remove the task with passed id and show rest of them
    // filter( )
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // To add a new task

  const addTask = async (task) => {
    //  produce and id..
    // const id = Math.floor(Math.random() * 1000) + 1;
    // let id = tasks.length + 1;
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    // const newTask = { id, ...task };

    setTasks([...tasks, data]);
  };
  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No tasks to display"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/topics" element={<UState />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
