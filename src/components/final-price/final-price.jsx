import { useMemo } from 'react';
import PropTypes from 'prop-types';
import finalPriceStyles from './final-price.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

const FinalPrice = ({ handleOrderButtonClick, prices, bunPrice }) => {

    const total = useMemo(() =>
        prices.reduce((sum, price) => {
            return (sum += price);
        }, bunPrice * 2),
        [prices, bunPrice]
    );

    return (
            <div className={`${finalPriceStyles.final__wrap} mr-4`}>
                <div className={`${finalPriceStyles.final__price} mr-10`}>
                    <p className="text text_type_digits-medium mr-2">{bunPrice ? total : 0}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button onClick={handleOrderButtonClick} htmlType="button" type="primary" size="large">Оформить заказ</Button>
            </div>
    )
}

FinalPrice.propTypes = {
    handleOrderButtonClick: PropTypes.func.isRequired,
    prices: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default FinalPrice;