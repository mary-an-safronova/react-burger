import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../../services/actions/burger-ingredients';
import { wsConnectionStart, wsConnectionClosed } from '../../services/actions/wsActionTypes';
import orderPageStyle from './order-page.module.css';
import { Order } from '../../components';
import { wsUrlOrders } from '../../utils/api';

const OrderPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart(`${wsUrlOrders}/all`))
        return () => {
            dispatch(wsConnectionClosed())
          }
    }, [dispatch])

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])


    return (
        <div className={`${orderPageStyle.wrap} pt-30`}>
            <Order orderNumber={orderPageStyle.orderNumber} />
        </div>
    )
}

export default OrderPage;