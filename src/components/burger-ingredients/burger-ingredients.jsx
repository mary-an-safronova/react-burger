import React from 'react';
import Switch from '../switch/switch.jsx';
import burgerIngredientsStyle from  './burger-ingredients.module.css';
import Cards from '../cards/cards';
import { data } from '../../utils/constants.js';
import { ingredientTypes } from '../../utils/constants.js';

const BurgerIngredients = () => {
    return (
        <section className={`${burgerIngredientsStyle.ingredients} mt-5 pt-5`}>
            <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
            <Switch ingredients={ ingredientTypes } />
            <div className={burgerIngredientsStyle.scroll}>
                {ingredientTypes.map((item, index) => {
                    return <Cards cards={ data } types={ingredientTypes} typesItem={item.type} typesText={item.text} key={index} />
                })}
            </div>
        </section>
    )
}

export default BurgerIngredients;