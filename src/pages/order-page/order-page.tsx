import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import { useParams, useLocation } from 'react-router-dom';
import { getData } from '../../services/actions/burger-ingredients';
import { wsConnectionStartAction, wsConnectionClosedAction } from '../../services/actions/ws';
import orderFeedPageStyle from './order-page.module.css';
import { Order } from '../../components';
import { wsUrlOrders } from '../../utils/api';

const OrderFeedPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams();
    const ingredients = useSelector((state) => state.burgerIngredients.ingredients);
    const orders = useSelector((state) => state.ws.orders);
    const order = orders?.find((item) => item._id === id);

    useEffect(() => {
        dispatch(wsConnectionStartAction(`${wsUrlOrders}/all`))
        return () => {
            dispatch(wsConnectionClosedAction())
          }
    }, [dispatch])

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])


    return (
        <div className={`${orderFeedPageStyle.wrap} pt-30`}>
            { order &&
            <Order orderNumber={orderFeedPageStyle.orderNumber} location={location} order={order} ingredients={ingredients} />
            }
        </div>
    )
}

export default OrderFeedPage;