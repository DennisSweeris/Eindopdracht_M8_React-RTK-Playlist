import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Playlist from "./components/_Playlist/features/playlist/Playlist";
import About from "./components/_About/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" component={Playlist} exact />
        <Route path="/about" component={About} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
