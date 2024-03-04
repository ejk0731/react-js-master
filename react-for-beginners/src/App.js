/* 
  React Router
  npm install react-router-dom

  BrowserRouter - http://localhost:3001/
  HashRouter - http://localhost:3001/#/
  Link - 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
  Route - 
    path= "페이지명/:{변수이름}" 
*/

import { BrowserRouter as  Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id" element={ <Detail />}>
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
