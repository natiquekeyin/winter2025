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
  ]);

  return (
    <>
      <div className="container">
        <Header title="Task Tracker" />
        {tasks.length > 0 ? <Tasks tasks={tasks} /> : "No tasks to display"}
      </div>
    </>
  );
}

export default App;
