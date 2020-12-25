import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const QuizInstructions = () => (
  <Fragment>
    <Helmet>
      <title>Quiz Instructions - Quiz App</title>
    </Helmet>
    <div className="instructions container">
      <h1>How to play the Game</h1>
    </div>
  </Fragment>
);

export default QuizInstructions;
