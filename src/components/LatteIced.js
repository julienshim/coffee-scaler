import React, { Fragment } from "react";

const defaultRatio = {
  coffee: 18,
  waterLossed: 18 * 2,
  simpleSyrup: 10,
  water: 90,
  milk: 176,
  ice: 56,
  output: 90 + 10 + 176 - 18 * 2,
};

const LatteIced = () => {
  return (
    <Fragment>
      <h1>Latte Iced</h1>
      <form>
        <label>coffee</label>
        <input type="text" name="coffee" />
        <label>water</label>
        <input type="text" name="water" />
        <label>milk</label>
        <input type="text" name="milk" />
        <label>simple syrup</label>
        <input type="text" name="simpleSyrup" />
        <label>output</label>
        <input type="text" name="output" />
      </form>
    </Fragment>
  );
};

export default LatteIced;
