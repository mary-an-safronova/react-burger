import { useMemo, useContext } from 'react';
import { openOrderModalContext } from '../../services/openOrderModalContext';
import { dataOrderContext } from '../../services/dataOrderContext';
import PropTypes from 'prop-types';
import finalPriceStyles from './final-price.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { apiConfig } from '../../utils/constants.js';
import { Modal } from '../modal/modal';
import { OrderDetails } from '../order-details/order-details';

const FinalPrice = ({ prices, bunPrice, ingredientsOder }) => {
    const {openOrderModal, setOpenOrderModal} = useContext(openOrderModalContext);
    const {setDataOrder} = useContext(dataOrderContext);

    const postOrder = () =>
        fetch(`${apiConfig.baseUrl}/orders`, {
            method: "POST",
            headers: apiConfig.headers,
            body: JSON.stringify({
            ingredients: ingredientsOder,
            }),
        })
        .then((res) => {
        if (res.ok) {
            return res.json();
        }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            setDataOrder(data);
            setOpenOrderModal(!openOrderModal);
        })
        .catch((err) => { console.log(err) })

    const closeModal = () => {
        setOpenOrderModal(!openOrderModal);
    }

    const total = useMemo(() =>
        prices.reduce((sum, price) => {
            return (sum += price);
        }, bunPrice * 2),
        [prices, bunPrice]
    );

    return (
        <>
        <div className={`${finalPriceStyles.final__wrap} mr-4`}>
            <div className={`${finalPriceStyles.final__price} mr-10`}>
                <p className="text text_type_digits-medium mr-2">{bunPrice ? total : 0}</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button onClick={postOrder} htmlType="button" type="primary" size="large">Оформить заказ</Button>
        </div>
        {
            openOrderModal && <Modal onClose={closeModal}>
                <OrderDetails />
            </Modal>
        }
      </>
    )
}

FinalPrice.propTypes = {
    prices: PropTypes.arrayOf(PropTypes.number).isRequired,
    ingredientsOder: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FinalPrice;