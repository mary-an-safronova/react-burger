import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { getData } from '../../services/actions/burger-ingredients';
import { wsConnectionStart, wsConnectionClosed } from '../../services/actions/wsActionTypes';
import orderPageStyle from './order-page.module.css';
import { Order } from '../../components';
import { wsUrlOrders } from '../../utils/api';
import { getCookie } from '../../utils/cookie';

const OrderPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams();
    const ingredients = useSelector((state) => state.burgerIngredients.ingredients);
    const orders = useSelector((state) => state.ws.orders);
    const order = orders?.find((item) => item._id === id);

    const accessToken = getCookie("accessToken").replace('Bearer ', '');

    useEffect(() => {
        if(location.pathname === `/feed/${id}`) {
            dispatch(wsConnectionStart(`${wsUrlOrders}/all`))
        } else {
            dispatch(wsConnectionStart(`${wsUrlOrders}?token=${accessToken}`))
        }
        return () => {
            dispatch(wsConnectionClosed())
          }
    }, [dispatch, accessToken, id, location.pathname])

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])


    return (
        <div className={`${orderPageStyle.wrap} pt-30`}>
            <Order orderNumber={orderPageStyle.orderNumber} location={location} order={order} ingredients={ingredients} />
        </div>
    )
}

export default OrderPage;