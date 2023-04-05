import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import finalPriceStyles from './final-price.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

const FinalPrice = (props) => {
    const innerItems = () => {
        const item = props.data?.filter(item => {
            return item.type !== 'bun';
        })
        return item;
    };
    const innerIngredients = innerItems();

    const outerItems = () => {
        const item = props.data?.filter(item => {
            return item.type === 'bun';
        })
        return item;
    };
    const outerIngredients = outerItems();

    const prices = [];
    innerIngredients?.map(item => prices.push(item.price));
    outerIngredients?.map(item => prices.push(item.price * 2));
    const total = prices.reduce((sum, price) => sum + price, 0)

    return (
        <div className={`${finalPriceStyles.final__wrap} mr-4`}>
            <div className={`${finalPriceStyles.final__price} mr-10`}>
                <p className="text text_type_digits-medium mr-2">{total}</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button onClick={props.handleOrderButtonClick} htmlType="button" type="primary" size="large">Оформить заказ</Button>
        </div>
    )
}

FinalPrice.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired,
    handleOrderButtonClick: PropTypes.func.isRequired,
}

export default FinalPrice;