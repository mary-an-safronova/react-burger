import { Order } from '..'
import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

const OrderModal = () => {
    const location = useLocation();
    const { id } = useParams();
    const ingredients = useSelector((state) => state.burgerIngredients.ingredients);

    const feedOrders = useSelector((state) => state.ws.orders);
    const authOrders = useSelector((state) => state.wsAuth.orders);

    const orders = location.pathname === `/feed/${id}` ? feedOrders : authOrders;
    const order = orders?.find((item) => item._id === id);

    return (
        <Order location={location} order={order} ingredients={ingredients} />
    )
}

export default OrderModal;