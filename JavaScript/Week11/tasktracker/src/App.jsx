import "./App.css";
import Header from "./components/Header";
// import Users from "./components/topics/Users";
import Tasks from "./components/Tasks";
function App() {
  return (
    <>
      <div className="container">
        <Header title="Task Tracker" />
        {/* <Users /> */}
        <Tasks />
      </div>
    </>
  );
}

export default App;
