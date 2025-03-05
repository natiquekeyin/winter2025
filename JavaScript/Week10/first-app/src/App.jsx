import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import History from "./components/History";

function App() {
  return (
    <>
      <h1 className="demo">First React App</h1>
      <History title="Canada" text="This is great Canada history here......" />
      <hr />
      <History title="Maxico" text="This is Maxico, you will love it" />
      <hr />
      <History title="Australia" text="This is Australia history here" />
      <Contact />
      <hr />
      <About />
    </>
  );
}

export default App;
