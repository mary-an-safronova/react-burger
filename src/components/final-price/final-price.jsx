import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import finalPriceStyles from './final-price.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal/modal';
import { OrderDetails } from '../order-details/order-details';
import { postOrder, closeOrderDetailsModal } from "../../services/actions/order-details";
import { clearConstructor } from '../../services/actions/burger-constructor';

const FinalPrice = ({ total, ingredientsId }) => {

    const orderDetails = (state) => state.orderDetails;
    const { openOrderDetailsModal, id } = useSelector(orderDetails);

    const dispatch = useDispatch();

    const orderHandler = () => {
        dispatch(postOrder(ingredientsId))
    }

    const closeModal = () => {
        dispatch(closeOrderDetailsModal());
        dispatch(clearConstructor());
    }

    return (
        <>
        <div className={`${finalPriceStyles.final__wrap} mr-4`}>
            <div className={`${finalPriceStyles.final__price} mr-10`}>
                <p className="text text_type_digits-medium mr-2">{total}</p>
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
    total: PropTypes.number.isRequired,
    ingredientsId: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FinalPrice;