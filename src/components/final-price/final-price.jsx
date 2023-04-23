import { useMemo, useContext } from 'react';
import { openModalContext } from '../../services/openModalContext';
import { itemContext } from '../../services/itemContext';
import PropTypes from 'prop-types';
import finalPriceStyles from './final-price.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

const FinalPrice = ({ prices, bunPrice }) => {
    const {openModal, setOpenModal} = useContext(openModalContext);
    const {setItem} = useContext(itemContext);

    const handleOrderButtonClick = () => {
        setItem(false);
        setOpenModal(!openModal);
      }

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
    prices: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default FinalPrice;