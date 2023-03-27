import React from "react";
import { data } from '../../utils/constants.js';

const IngredientCard = () => {
    const bunCard = data.filter(card => {
        return card.type === 'bun';
    });

    const otherCard = data.filter(card => {
        return card.type !== 'bun';
    });

    return (
        <div></div>
    )
}

export default IngredientCard;