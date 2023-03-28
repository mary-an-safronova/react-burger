import React from "react";
import ingredientCardOuterStyles from './ingredient-card-outer.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCardOuter = (props) => {

    const outerItems = () => {
        const item = props.data?.filter(item => {
            return item.type === 'bun';
        })
        return item;
    };

    const outerIngredients = outerItems();

    return (
        <div className={ingredientCardOuterStyles.card__outer} key={outerIngredients[0]._id}>
            <ConstructorElement
                type={props.position}
                isLocked={true}
                text={`${outerIngredients[0].name} ${props.positionText}`}
                price={outerIngredients[0].price}
                thumbnail={outerIngredients[0].image}
            />
        </div>
    )
}

export default IngredientCardOuter;