import { useSelector } from 'react-redux';
import orderFeedStatusStyle from './order-feed-status.module.css';
import { v4 as uuidv4 } from 'uuid';

const OrderFeedStatus = () => {
    const total = useSelector((state) => state.ws.total);
    const totalToday = useSelector((state) => state.ws.totalToday);
    const orders = useSelector((state) => state.ws.orders);

    const doneList = orders.map((item) => item.status === 'done' && item.number)
    const inProgressList = orders.map((item) => item.status === 'pending' && item.number)

    return (
        <section className={`${orderFeedStatusStyle.mainWrap} mt-25`}>
            <div className={orderFeedStatusStyle.statusWrap}>
                <div className={orderFeedStatusStyle.doneWrap}>
                    <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
                    <div className={`${orderFeedStatusStyle.orders} ${orderFeedStatusStyle.scroll} mr-9`}>
                        { doneList.map((item) => 
                            <p className={`${orderFeedStatusStyle.doneOrder} text text_type_digits-default`} key={uuidv4()}>{item}</p>
                        )}
                    </div>
                </div>
                <div className={orderFeedStatusStyle.inProgressWrap}>
                <h3 className="text text_type_main-medium mb-6">В работе:</h3>
                    <div className={`${orderFeedStatusStyle.orders} ${orderFeedStatusStyle.scroll} mr-9`}>
                        { inProgressList.map((item) => 
                            <p className={`${orderFeedStatusStyle.inProgressOrder} text text_type_digits-default mb-2`} key={uuidv4()}>{item}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-15">
                    <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
                    <p className="text text_type_digits-large">{total}</p>
                </div>
                <div className="mt-15">
                    <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
                    <p className="text text_type_digits-large">{totalToday}</p>
                </div>
        </section>
    )
}

export default OrderFeedStatus;