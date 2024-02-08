import { useEffect, useState } from "react";

function Hello() {
  /* 1. function - 보통은 헤당 방법으로 사용하지 않음 */
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }
  useEffect(hiFn, []);
 
  /* 2. 익명 함수 - 해당 방법으로 자주 사용됨 */
  // useEffect(() => {
  //   console.log("Created :)");
  //   return () => console.log("destroyed :(")
  // }, [])
  return <h1>Hello!</h1>
}

function App() {
  const [showing, setShowing] = useState();
  const onClick = () => {
    setShowing((prev) => !prev) 
  }
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show" }</button>
    </div>
  );
}

export default App;
