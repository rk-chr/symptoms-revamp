import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/chat-box" component={ChatBox} />
    </Router>
  );
}

export default App;
