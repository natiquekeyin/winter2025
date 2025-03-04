import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let myName = "Alan Smith";
  return (
    <>
      <h1>React Application by Keyin College - {myName}</h1>
      <p>This is first text in our project - {2 + 9}</p>
      <h2 className="demo">Welcome {myName.toUpperCase()}</h2>
    </>
  );
}

export default App;
