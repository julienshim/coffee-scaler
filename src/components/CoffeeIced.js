import React, { Fragment } from "react";

const serviceIcedRatio = {
  ice: 50,
  output: 295
}

const defaultRatio = {
  coffee: 10,
  serviceIce: 33,
  output: 200,
  brewIce: 74,
  water: 113,
  waterLossed: 10 * 2,
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
