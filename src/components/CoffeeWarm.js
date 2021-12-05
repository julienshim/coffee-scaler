import React, { useState, Fragment } from "react";

const defaultRatio = {
  coffee: 11,
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
    const value = event.target.value;

    if (name === "output") {
      setOutput(value);
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
        value - ((value * defaultRatio.cofee) / defaultRatio.water) * 2
      );
    }
  };

  return (
    <Fragment>
      <h1>Coffee Warm</h1>
      <form>
        <input
          type="text"
          value={coffee}
          name="coffee"
          onChange={recalculate}
        />
        <input type="text" value={water} name="water" Change={recalculate} />
        <input
          type="text"
          value={output}
          name="output"
          onChange={recalculate}
        />
      </form>
    </Fragment>
  );
};

export default CoffeeWarm;
