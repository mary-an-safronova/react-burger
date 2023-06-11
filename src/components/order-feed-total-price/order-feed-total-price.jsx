import orderFeedTotalPriceStyle from './order-feed-total-price.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';

const OrderFeedTotalPrice = ({ prices }) => {
    const total = useMemo(() =>
        prices.reduce((sum, price) => {
            return (sum += price);
        }, 0),
        [prices]
    );

    return (
        <div className={`${orderFeedTotalPriceStyle.priceWrap} ml-6`}>
            <p className="text text_type_digits-default mr-2">{total}</p>
            <CurrencyIcon type="primary" />
        </div>
    )
}

export default OrderFeedTotalPrice;