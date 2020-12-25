import React from "react";
import "./styles/styles.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Play from "./components/Quiz/Play";
import "../node_modules/@mdi/font/css/materialdesignicons.min.css";
import QuizInstruction from "./components/Quiz/QuizInstructions";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      {/* <Route path="/play/instructions" exact component={QuizInstruction} /> */}
      <Route path="/play/Quiz" exact component={Play} />
    </Router>
  );
}

export default App;
