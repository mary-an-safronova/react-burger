import React from 'react';
import PropTypes from 'prop-types';
import finalPriceStyles from './final-price.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';

const FinalPrice = (props) => {
    const innerItems = () => {
        const item = props.data?.filter(item => {
            return item.type !== 'bun';
        })
        return item;
    };

    const innerIngredients = innerItems();
    const prices = [];

    innerIngredients.map(item => prices.push(item.price));
    
    const total = prices.reduce((sum, price) => sum + price, 0)

    return (
        <div className={finalPriceStyles.final__wrap}>
            <div className={finalPriceStyles.final__price}>
                <p className="text text_type_digits-medium mr-2">{total + (props.outerIngredients[0].price * 2)}</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
        </div>
    )
}

FinalPrice.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(ingredientType.data)).isRequired,
    outerIngredients: PropTypes.arrayOf(PropTypes.shape(ingredientType.data)).isRequired
}

export default FinalPrice;