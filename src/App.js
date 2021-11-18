// import logo from './logo.svg';
import React, { useState, Fragment } from "react";
import "./App.css";

const defaults = {
  coffee: 11,
  water: 200,
  // grind: 18,
};

const App = () => {
  const [isLatte, setIsLatte] = useState(false);
  const [isIced, setIsIced] = useState(false);
  const [gramsWater, setGramsWater] = useState(defaults["water"]);
  const [gramsCoffee, setGramsCoffee] = useState(defaults["coffee"]);

  return (
    <Fragment>
      <h1>Coffee Scaler</h1>
      <label for="gramsWater" />
      <input type="text" value={gramsWater} id="gramsWater" />
      <label for="gramsCoffee" />
      <input type="text" value={gramsCoffee} id="gramsCoffee" />
    </Fragment>
  );
};

export default App;

