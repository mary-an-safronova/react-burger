import React from "react";
import PropTypes from 'prop-types';
import ingredientCardOuterStyles from './ingredient-card-outer.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';

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

IngredientCardOuter.propTypes = {
    outerIngredients: PropTypes.arrayOf(PropTypes.shape(ingredientType.data)).isRequired,
    position: PropTypes.string.isRequired,
    positionText: PropTypes.string.isRequired
}

export default IngredientCardOuter;