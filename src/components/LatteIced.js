import React from 'react';

const defaultRatio = {
    coffee: 18,
    waterLossed: 18 * 2,
    simpleSyrup: 10,
    water: 90,
    milk: 176,
    ice: 56,
    output: (90 + 10 + 176) - (18 * 2)
};

const LatteIced = () => {
    return (
        <h1>Iced Cofee</h1>
    )
}

export default LatteIced;