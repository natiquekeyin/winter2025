import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "March 19,2025 at 5:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "School Appointment",
      day: "March 29,2025 at 5:00pm",
      reminder: false,
    },
    {
      id: 3,
      text: "GYM Appointment",
      day: "April 1,2025 at 3:00pm",
      reminder: false,
    },
  ]);

  // Delete a task

  const deleteTask = (id) => {
    // go and use the setTasks and remove the task with passed id and show rest of them
    // filter( )
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <>
      <div className="container">
        <Header title="Task Tracker" />
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No tasks to display"
        )}
      </div>
    </>
  );
}

export default App;
