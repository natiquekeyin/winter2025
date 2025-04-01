import "./App.css";
import useDocTitle from "./hooks/useDocTitle";
import useSmoothScroll from "./hooks/useSmoothScroll";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [docTitle, setDocTitle] = useDocTitle({ title: "Start Page" });
  const [refToScroll, smoothScroll] = useSmoothScroll();
  const [topRef, smoothScrollTop] = useSmoothScroll();
  const [count, SetCount] = useLocalStorage("count1");
  const increment = () => {
    SetCount(count + 1);
  };
  return (
    <>
      <h1>Custom Hooks</h1>
      <button onClick={() => setDocTitle("My new Page")}>Change Title</button>
      <button onClick={smoothScroll} ref={topRef}>
        Scroll
      </button>
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button>

      <div style={{ marginTop: "150vh" }} ref={refToScroll}>
        {" "}
        I am at bottom of the screen
      </div>
      <button onClick={smoothScrollTop}>Go To Top!</button>
    </>
  );
}

export default App;

// Creating our own Hooks... to maintain states in function component..[class component]
