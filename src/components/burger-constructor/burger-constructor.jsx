import React from 'react';
import burgerConstructorStyles from './burger-constructor.module.css';
import IngredientCards from '../ingredient-cards/ingredient-cards';
import FinalPrice from '../final-price/final-price';

import IngredientCardOuter from '../ingredient-card-outer/ingredient-card-outer';
import IngredientCard from '../ingredient-card/ingredient-card';

const BurgerConstructor = (props) => {
    const outerItems = () => {
        const item = props.data?.filter(item => {
            return item.type === 'bun';
        })
        return item;
    };

    const outerIngredients = outerItems();

    return (
        <section className={burgerConstructorStyles.burgerConstructor}>
            <IngredientCards data={props.data} outerIngredients={outerIngredients} />
            <FinalPrice data={props.data} outerIngredients={outerIngredients} />
        </section>
    )
}

export default BurgerConstructor;