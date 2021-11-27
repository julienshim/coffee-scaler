import React from "react";

const defaultRatio = {
  coffee: 11,
  waterAbsorptionLoss: 11 * 2,
  water: 200,
  output: 200 - (11 * 2)
};

console.log(defaultRatio.output)

const CoffeeWarm = () => {
  return <h1>Iced Cofee</h1>;
};

export default CoffeeWarm;
