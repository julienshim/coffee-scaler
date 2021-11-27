import React from 'react';

const defaultRatio = {
    coffee: 18,
    waterLossed: 18 * 2,
    simpleSyrup: 10,
    water: 90,
    milk: 176,
    output: (90 + 176 + 10) - (18 * 2)
};

const LatteWarm = () => {
    return (
        <h1>Iced Cofee</h1>
    )
}

export default LatteWarm;