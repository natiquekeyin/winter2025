// useEffect actually gives a side effect type of functionality to the component..it means that whenever the component gets loaded, rendered, re-rendered etc. we want some particular code to execute.

import { useEffect, useState } from "react";

const Ueffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("use effect working");
  });

  return (
    <div>
      <h1>Use Effect Hook test</h1>
      <p>The value of count is {count}</p>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
    </div>
  );
};
export default Ueffect;
