import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const Page1 = () => <div>Page 1</div>;
const Page2 = () => <div>Page 2</div>;
const Page3 = () => <div>Page 3</div>;

const App = () => {
  return (
    <Router>
      <Link to="/p1">Page 1</Link>
      <Link to="/p2">Page 2</Link>
      <Link to="/p3">Page 3</Link>
      <Switch>
        <Route path="/p1">
          <Page1 />
        </Route>
        <Route path="/p2">
          <Page2 />
        </Route>
        <Route path="/p3">
          <Page3 />
        </Route>
      </Switch>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
