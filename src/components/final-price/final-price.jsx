import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import finalPriceStyles from './final-price.module.css'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal, OrderDetails } from '..';
import { postOrder, closeOrderDetailsModal } from "../../services/actions/order-details";
import { clearConstructor } from '../../services/actions/burger-constructor';
import { PATH } from '../../utils/api';

const FinalPrice = ({ total, ingredientsId }) => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth.auth);

    const orderDetails = (state) => state.orderDetails;
    const { openOrderDetailsModal, id, isLoading } = useSelector(orderDetails);

    const dispatch = useDispatch();

    const orderHandler = () => {
        if(auth) {
            dispatch(postOrder(ingredientsId));
        } else {
            navigate(PATH.LOGIN, { replace: true });
        }
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
            isLoading && 
            <div className={finalPriceStyles.overlay}>
                <p className={`${finalPriceStyles.span} className="text text_type_main-medium`}>Ваш заказ обрабатывается...</p>
                <div className={finalPriceStyles.loader}></div>
            </div>
        }
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