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
  const [waterAbsorptionLoss, setWaterAbsorptionLoss] = useState(
    defaultRatio.waterAbsorptionLoss
  );
  const [water, setWater] = useState(defaultRatio.water);
  const [output, setOutput] = useState(defaultRatio.output);

  return (
    <Fragment>
      <h1>Coffee Warm</h1>
      <form>
        <input type="text" value={coffee} />
        <input type="text" value={water} />
        <input type="text" value={output} />
      </form>
    </Fragment>
  );
};

export default CoffeeWarm;
