import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import orderFeedStyle from './order-feed.module.css';
import { OrderCard } from '..';
import { getData } from '../../services/actions/burger-ingredients';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../services/types';

const OrderFeed = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state: RootState) => state.ws.orders);

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    return (
        <section className={`${orderFeedStyle.wrap} mt-5 pt-5`}>
            <h1 className={`${orderFeedStyle.title} text text_type_main-large`}>Лента заказов</h1>
            <div className={orderFeedStyle.scroll}>
                {
                    orders?.map((order) => 
                        <OrderCard order={order} cardWidthStyle="" profileOrders={false} number={order?.number} key={uuidv4()}/>
                    )
                }
            </div>
        </section>
    )
}

export default OrderFeed;