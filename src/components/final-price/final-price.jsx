import React from 'react';
import finalPriceStyles from './final-price.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

const FinalPrice = (props) => {
    return (
        <div className={finalPriceStyles.final__wrap}>
            <div className={finalPriceStyles.final__price}>
                <p className="text text_type_digits-default mr-2">610</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
        </div>
    )
}

export default FinalPrice;