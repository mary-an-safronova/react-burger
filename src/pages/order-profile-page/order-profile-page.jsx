import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { getData } from '../../services/actions/burger-ingredients';
import { wsAuthConnectionStart, wsAuthConnectionClosed } from '../../services/actions/ws-auth';
import orderProfilePageStyle from './order-profile-page.module.css';
import { Order } from '../../components';
import { wsUrlOrders } from '../../utils/api';
import { getCookie } from '../../utils/cookie';

const OrderProfilePage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams();
    const ingredients = useSelector((state) => state.burgerIngredients.ingredients);
    const orders = useSelector((state) => state.wsAuth.orders);
    const order = orders?.find((item) => item._id === id);

    const accessToken = getCookie("accessToken").replace('Bearer ', '');

    useEffect(() => {
        dispatch(wsAuthConnectionStart(`${wsUrlOrders}?token=${accessToken}`))
        return dispatch(wsAuthConnectionClosed())
    }, [dispatch, accessToken])

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])


    return (
        <div className={`${orderProfilePageStyle.wrap} pt-30`}>
            <Order orderNumber={orderProfilePageStyle.orderNumber} location={location} order={order} ingredients={ingredients} />
        </div>
    )
}

export default OrderProfilePage;