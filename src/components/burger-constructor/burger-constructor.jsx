import React from 'react';
import burgerConstructorStyles from './burger-constructor.module.css';
import IngredientCards from '../ingredient-cards/ingredient-cards';
import FinalPrice from '../final-price/final-price';

const BurgerConstructor = (props) => {
    return (
        <section className={burgerConstructorStyles.burgerConstructor}>
            <IngredientCards data={props.data} />
            <FinalPrice />
        </section>
    )
}

export default BurgerConstructor;