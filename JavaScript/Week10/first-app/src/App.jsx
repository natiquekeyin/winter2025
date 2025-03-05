import About from "./components/About";
import Contact from "./components/Contact";
import History from "./components/History";

function App() {
  return (
    <>
      <h1 className="demo">First React App</h1>
      <History title="Canada" text="This is great Canada history here......" />
      <hr />

      <Contact guest="Alan" color="blue" loading={true} />
      <Contact guest="Bob" color="red" loading={false} />
      <Contact guest="Christina" color="green" loading={false} />
      <hr />
    </>
  );
}

export default App;
