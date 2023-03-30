import React from "react";
import PropTypes from 'prop-types';
import ingredientCardsStyles from './ingredient-cards.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import IngredientCardOuter from '../ingredient-card-outer/ingredient-card-outer';
import { ingredientType } from '../../utils/types';

const IngredientCards = (props) => {
    const position = {
        top: "top",
        bottom: "bottom"
    }
    
    const positionText = {
        top: "(верх)",
        bottom: "(низ)"
    }

    return (
        <div className={ingredientCardsStyles.cards}>
            <IngredientCardOuter outerIngredients={props.outerIngredients} position={position.top} data={props.data} positionText={positionText.top} />
            <div className={ingredientCardsStyles.scroll}>
                <IngredientCard data={props.data} />
            </div>
            <IngredientCardOuter outerIngredients={props.outerIngredients} position={position.bottom} data={props.data} positionText={positionText.bottom} />
        </div>
    )
}

IngredientCards.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(ingredientType.data)).isRequired,
    outerIngredients: PropTypes.arrayOf(PropTypes.shape(ingredientType.data)).isRequired
}

export default IngredientCards;