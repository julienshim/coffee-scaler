import React, { useState, Fragment } from "react";

const defaultRatio = {
  coffee: 11,
  waterAbsorptionLoss: 11 * 2,
  water: 200,
  output: 200 - 11 * 2,
};

console.log(defaultRatio.output);

const CoffeeWarm = () => {
  const [coffee, setCoffee] = useState(defaultRatio.coffee);
  const [water, setWater] = useState(defaultRatio.water);
  const [output, setOutput] = useState(defaultRatio.output);

  const recalculate = (event) => {
    const name = event.target["name"];
    const value = +event.target.value;

    if (name === "output") {
      setOutput(value);
      setCoffee((value * 11) / 178);
      setWater((((value * 11) / 178) * 200) / 11);
    }
    if (name === "coffee") {
      setCoffee(value);
      setWater((value * defaultRatio.water) / defaultRatio.coffee);
      setOutput((value * defaultRatio.water) / defaultRatio.coffee - value * 2);
    }
    if (name === "water") {
      setWater(value);
      setCoffee((value * defaultRatio.coffee) / defaultRatio.water);
      setOutput(
        value - ((value * defaultRatio.coffee) / defaultRatio.water) * 2
      );
    }
  };

  const round = (n) => {
    return Math.round(n * 10) / 10;
  };

  return (
    <Fragment>
      <h1>Coffee Warm</h1>
      <form>
        <label>coffee</label>
        <input
          type="text"
          value={round(coffee)}
          name="coffee"
          onChange={recalculate}
        />
        <label>water</label>
        <input
          type="text"
          value={round(water)}
          name="water"
          onChange={recalculate}
        />
        <label>output</label>
        <input
          type="text"
          value={round(output)}
          name="output"
          onChange={recalculate}
        />
      </form>
    </Fragment>
  );
};

export default CoffeeWarm;
