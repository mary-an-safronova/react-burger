import React from "react";
import IngredientCard from '../ingredient-card/ingredient-card';

import IngredientCardsStyles from './ingredient-cards.module.css'
import { data } from '../../utils/constants.js';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCards = () => {
    const position = {
        top: "top",
        bottom: "bottom"
    }

    return (
        <div className={IngredientCardsStyles.cards}>
            <ConstructorElement
                type={position.top}
                isLocked={true}
                text={`${data[0].name} (верх)`}
                price={data[0].price}
                thumbnail={data[0].image}
            />
            <ConstructorElement
                text={data[1].name}
                price={data[1].price}
                thumbnail={data[1].image}
            />
            <ConstructorElement
                type={position.bottom}
                isLocked={true}
                text={`${data[14].name} (низ)`}
                price={data[14].price}
                thumbnail={data[14].image}
            />
        </div>
    )
}

export default IngredientCards;