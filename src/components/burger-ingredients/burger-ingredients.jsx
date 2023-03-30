import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../switch/switch.jsx';
import burgerIngredientsStyle from  './burger-ingredients.module.css';
import Cards from '../cards/cards';
import { ingredientTypes } from '../../utils/constants.js';

const BurgerIngredients = (props) => {
    return (
        <section className={`${burgerIngredientsStyle.ingredients} mt-5 pt-5`}>
            <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
            <Switch ingredients={ ingredientTypes } />
            <div className={burgerIngredientsStyle.scroll}>
                {ingredientTypes.map((item, index) => {
                    return <Cards cards={props.data} types={ingredientTypes} typesItem={item.type} typesText={item.text} key={index} />
                })}
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired
}

export default BurgerIngredients;