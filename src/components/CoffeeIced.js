import React from 'react';

const defaultRatio = {
    coffee: 11,
    ice: 80,
    output: (120 + 80) - 11 * 2,
    water: 120,
    waterLossed: 11 * 2,
};

const CoffeeIced = () => {
    return (
        <h1>Iced Cofee</h1>
    )
}

export default CoffeeIced;