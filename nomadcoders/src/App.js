import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const myClick = () => setCounter((prev) => prev + 1);

  console.log("I run all the time");
  const IRunOnlyOnce = () => {
    console.log("I run only once");
  };
  useEffect(IRunOnlyOnce, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={myClick}>click me</button>
    </div>
  );
}

export default App;
