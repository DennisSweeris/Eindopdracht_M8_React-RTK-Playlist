import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Playlist from "./features/playlist/Playlist";
import Counter from "./features/counter/Counter";

import "./App.css";

function App() {
  return (
    <Router>
    <div className="App">
      <Playlist />
      <Link to="/Counter">Counter</Link>
       
          {/* <Counter /> */}
    </div>
    <Switch>
      <Route path="/Counter">
        <Counter />
      </Route>
    </Switch>
     </Router>
  );
}


export default App;
