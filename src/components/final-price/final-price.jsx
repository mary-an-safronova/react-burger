import { useMemo, useContext } from 'react';
import { OpenOrderModalContext } from '../../services/OpenOrderModalContext';
import { DataOrderContext } from '../../services/DataOrderContext';
import PropTypes from 'prop-types';
import finalPriceStyles from './final-price.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal/modal';
import { OrderDetails } from '../order-details/order-details';
import { request } from '../../utils/api';

const FinalPrice = ({ prices, bunPrice, ingredientsOder }) => {
    const {openOrderModal, setOpenOrderModal} = useContext(OpenOrderModalContext);
    const {setDataOrder} = useContext(DataOrderContext);

    const postOrder = () =>
        request('/orders', 'POST', JSON.stringify({ ingredients: ingredientsOder }))
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