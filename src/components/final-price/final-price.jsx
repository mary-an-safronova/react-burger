import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import finalPriceStyles from './final-price.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal/modal';
import { OrderDetails } from '../order-details/order-details';
import { postOrder, closeOrderDetailsModal } from "../../services/actions/order-details";

const FinalPrice = ({ prices, bunPrice, ingredientsId }) => {
    const openOrderDetailsModal = useSelector(state => !!state.orderDetails.openOrderDetailsModal)
    const id = useSelector(state => state.orderDetails.id)

    const dispatch = useDispatch();

    const orderHandler = () => {
        dispatch(postOrder(ingredientsId))
    }

    const closeModal = () => {
        dispatch(closeOrderDetailsModal());
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
            <Button onClick={orderHandler} htmlType="button" type="primary" size="large">Оформить заказ</Button>
        </div>
        {
            openOrderDetailsModal && 
            <Modal onClose={closeModal}>
                <OrderDetails dataOrder={id} />
            </Modal>
        }
      </>
    )
}

FinalPrice.propTypes = {
    prices: PropTypes.arrayOf(PropTypes.number).isRequired,
    ingredientsId: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FinalPrice;