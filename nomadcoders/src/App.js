import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("created! ;)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const myClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={myClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
