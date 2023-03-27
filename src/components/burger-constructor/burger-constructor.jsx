import React from 'react';
import burgerConstructorStyles from './burger-constructor.module.css';
import IngredientCards from '../ingredient-cards/ingredient-cards';

const BurgerConstructor = () => {
    return (
        <section className={burgerConstructorStyles.burgerConstructor}>
            <IngredientCards />
        </section>
    )
}

export default BurgerConstructor;