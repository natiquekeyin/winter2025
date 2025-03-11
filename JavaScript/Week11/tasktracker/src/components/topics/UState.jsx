import { useState } from "react";

const UState = () => {
  const [name, setName] = useState("Alan");
  const [age, setAge] = useState(20);

  let obj = { name: "Christina", age: 20, height: 5.11, isYoung: true };
  const [person, setPerson] = useState(obj);

  let numbers = [1, 2, 3, 4];

  let [num, setNum] = useState(numbers);

  let changeName = () => {
    setName("Bob");
    setAge(30);
  };

  //   let changeData = () => {
  //     setPerson({ name: "Diana" });
  //   };

  let changeData = () => {
    setPerson((previousState) => {
      return {
        ...previousState,
        name: "Diana",
      };
    });
  };

  let changeArray = () => {
    setNum((previousState) => {
      return [...previousState, Math.floor(Math.random() * 50)];
    });
  };

  return (
    <div>
      <h1>Use State</h1>
      <p>
        {name} - {age}
      </p>
      <button onClick={changeName}>Change</button>
      {/* <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h3>{person.height}</h3>
      <h3>{person.isYoung.toString()}</h3>
      <button onClick={changeData}>Change Person</button> */}
      <ul>
        {num.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <button onClick={changeArray}>Change Array</button>
    </div>
  );
};
export default UState;
