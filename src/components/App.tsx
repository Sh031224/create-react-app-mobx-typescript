import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
