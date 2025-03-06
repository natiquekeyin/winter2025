import { useState } from "react";

const Hooks = () => {
  const [num, setNum] = useState(0);

  const [fname, setFname] = useState("Alan Smith");

  return (
    <>
      <h1>Hooks - {fname}</h1>
      <p> {num}</p>
      <button
        onClick={() => {
          setNum(num + 1);
          setFname("Bob Smith");
          document.title = num;
        }}
      >
        {" "}
        Change Num
      </button>
      <h1>{num}</h1>
    </>
  );
};
export default Hooks;
