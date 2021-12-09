import React, { Fragment } from "react";

const defaultRatio = {
  coffee: 18,
  waterLossed: 18 * 2,
  simpleSyrup: 10,
  water: 90,
  milk: 176,
  output: 90 + 176 + 10 - 18 * 2,
};

const LatteWarm = () => {
  return (
    <Fragment>
      <h1>Latte Warm</h1>
      <form>
        <label>coffee</label>
        <input type="text" name="coffee" />
        <label>water</label>
        <input type="text" name="water" />
        <label>simple syrup</label>
        <input type="text" name="simpleSyrup" />
        <label>output</label>
        <input type="text" name="output" />
      </form>
    </Fragment>
  );
};

export default LatteWarm;
