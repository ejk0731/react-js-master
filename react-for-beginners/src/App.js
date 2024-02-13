import { useState } from "react";
/* 
  state Change - two ways
  * 직접 값 넣어주기
  * 함수 넣어주기
*/
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo] );
    setToDo("");
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write what to do..!"></input>
        <button type="submit">Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, i) => {
          return(
            <li key={i}>{item.toUpperCase()}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
