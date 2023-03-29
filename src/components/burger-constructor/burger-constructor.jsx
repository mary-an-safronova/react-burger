import React from 'react';
import PropTypes from 'prop-types';
import burgerConstructorStyles from './burger-constructor.module.css';
import IngredientCards from '../ingredient-cards/ingredient-cards';
import FinalPrice from '../final-price/final-price';

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

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired
}

export default BurgerConstructor;