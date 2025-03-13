import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Ueffect from "./components/topics/Ueffect";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);
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

  // To add a new task

  const addTask = (task) => {
    //  produce and id..
    const id = Math.floor(Math.random() * 1000) + 1;
    // let id = tasks.length + 1;
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };
  return (
    <>
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {/* {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No tasks to display"
        )} */}

        <Ueffect />
      </div>
    </>
  );
}

export default App;
