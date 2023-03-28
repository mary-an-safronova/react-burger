import React from 'react';
import burgerConstructorStyles from './burger-constructor.module.css';
import IngredientCards from '../ingredient-cards/ingredient-cards';

const BurgerConstructor = (props) => {
    return (
        <section className={burgerConstructorStyles.burgerConstructor}>
            <IngredientCards data={props.data} />
        </section>
    )
}

export default BurgerConstructor;