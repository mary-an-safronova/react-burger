import React from "react";
import ingredientCardOuterStyles from './ingredient-card-outer.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCardOuter = (props) => {

    return (
        <div className={ingredientCardOuterStyles.card__outer} key={props.outerIngredients[0]._id}>
            <ConstructorElement
                type={props.position}
                isLocked={true}
                text={`${props.outerIngredients[0].name} ${props.positionText}`}
                price={props.outerIngredients[0].price}
                thumbnail={props.outerIngredients[0].image}
            />
        </div>
    )
}

export default IngredientCardOuter;