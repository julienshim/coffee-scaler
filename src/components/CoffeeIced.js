import React, { Fragment } from "react";

const defaultRatio = {
  coffee: 11,
  ice: 80,
  output: 120 + 80 - 11 * 2,
  water: 120,
  waterLossed: 11 * 2,
};

const CoffeeIced = () => {
  return (
    <Fragment>
      <h1>Coffee Iced</h1>
      <form>
        <label>coffee</label>
        <input type="text" name="coffee" />
        <label>water</label>
        <input type="text" name="water" />
        <label>ice</label>
        <input type="text" name="ice" />
        <label>output</label>
        <input type="text" name="output" />
      </form>
    </Fragment>
  );
};

export default CoffeeIced;
