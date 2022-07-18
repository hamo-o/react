import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const myChange = (event) => {
    setToDo(event.target.value);
  };
  const mySubmit = (event) => {
    event.preventDefault(); // 버튼 눌렀을 때 form 이 refreshing 되는 것을 막아준다
    if (toDo === "") {
      return;
    }
    setToDos((curArr) => [toDo, ...curArr]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={mySubmit} action="">
        <input
          onChange={myChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
