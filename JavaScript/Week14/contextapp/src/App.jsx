import "./App.css";
import Counter from "./components/Counter";
import { CounterContext } from "./context/Counter";
import { useContext } from "react";

function App() {
  const counterState = useContext(CounterContext);
  console.log("context", counterState);
  return (
    <>
      <h2>Context Application</h2>
      <h3>Count value is {counterState.count}</h3>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
