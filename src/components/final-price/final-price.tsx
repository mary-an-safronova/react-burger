import { useDispatch, useSelector } from '../../services/hooks';
import { useNavigate } from 'react-router-dom';
import finalPriceStyles from './final-price.module.css'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal, OrderDetails } from '..';
import { postOrder, closeOrderDetailsModal } from "../../services/actions/order-details";
import { clearConstructor } from '../../services/actions/burger-constructor';
import { PATH } from '../../utils/api';
import { FC } from 'react';
import { RootState } from '../../services/types';

type TFinalPrice = {
    readonly total: number;
    readonly ingredientsId: Array<string>;
    readonly disabled: boolean;
}

const FinalPrice: FC<TFinalPrice> = ({ total, ingredientsId, disabled }) => {
    const navigate = useNavigate();
    const auth = useSelector((state: RootState) => state.auth.auth);

    const orderDetails = (state: RootState) => state.orderDetails;
    const { openOrderDetailsModal, id } = useSelector(orderDetails);

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
            <Button onClick={orderHandler} htmlType="button" type="primary" size="large" disabled={disabled}>Оформить заказ</Button>
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

export default FinalPrice;