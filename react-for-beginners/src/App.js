import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    console.log("i run only once");
  }, []);

  useEffect(() => {
    console.log("i run when 'keyword' changes.")
  }, [keyword]);

  useEffect(() => {
    console.log("i run when 'counter' changes.")
  }, [counter]);

  useEffect(() => {
    console.log("i run when 'keyword & counter' changes.")
  }, [keyword, counter]);

  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <p>{counter}</p>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
