import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ListContainer } from "./containers/list.container";
import { DetailContainer } from "./containers/detail.container";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/list">
              <ListContainer />
            </Route>
            <Route path="/detail">
              <DetailContainer />
            </Route>
            <Route path="/">
              <ListContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
