import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const myClick = () => setCounter((prev) => prev + 1);
  const myChange = (event) => setKeyword(event.target.value);

  const IRunOnlyOnce = () => {
    console.log("I run only once");
  };
  useEffect(IRunOnlyOnce, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={myChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={myClick}>click me</button>
    </div>
  );
}

export default App;
