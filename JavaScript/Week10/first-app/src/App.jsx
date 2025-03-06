import About from "./components/About";
import Contact from "./components/Contact";
import History from "./components/History";
import Hooks from "./components/Hooks";

function App() {
  const onClick = () => {
    console.log("event here");
  };
  return (
    <>
      <h1 className="demo">First React App</h1>
      {/* <History
        title="Canada"
        text="This is great Canada history here......"
        onClick={onClick}
      />
      <hr /> */}

      {/* <Contact guest="Alan" color="yellow" loading={true} onClick={onClick} /> */}
      <Hooks />

      <hr />
    </>
  );
}

export default App;
