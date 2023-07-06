import { useSelector } from '../../services/hooks';
import orderFeedStatusStyle from './order-feed-status.module.css';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { RootState } from '../../services/types';

const OrderFeedStatus = () => {
    const total = useSelector((state: RootState) => state.ws.total);
    const totalToday = useSelector((state: RootState) => state.ws.totalToday);
    const orders = useSelector((state: RootState) => state.ws.orders);

    const doneList = useMemo(() => orders.filter((item) => item.status === 'done' && item), [orders]);
    const inProgressList = useMemo(() => orders.filter((item) => item.status !== 'done' && item), [orders]);

    return (
        <section className={`${orderFeedStatusStyle.mainWrap} mt-25`}>
            <div className={orderFeedStatusStyle.statusWrap}>
                <div className={orderFeedStatusStyle.doneWrap}>
                    <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
                    <div className={`${orderFeedStatusStyle.orders} ${orderFeedStatusStyle.scroll} mr-9`}>
                        { doneList.map((item) => 
                            <Link className={`${orderFeedStatusStyle.link} ${orderFeedStatusStyle.doneOrder}`} to={`/feed/${item._id}`} key={uuidv4()}>
                                <p className={`${orderFeedStatusStyle.doneOrder} text text_type_digits-default`}>{item?.number}</p>
                            </Link>
                        )}
                    </div>
                </div>
                <div className={orderFeedStatusStyle.inProgressWrap}>
                <h3 className="text text_type_main-medium mb-6">В работе:</h3>
                    <div className={`${orderFeedStatusStyle.orders} ${orderFeedStatusStyle.scroll} mr-9`}>
                        { inProgressList.map((item) => 
                            <Link className={`${orderFeedStatusStyle.link} ${orderFeedStatusStyle.inProgressOrder}`} to={`/feed/${item._id}`} key={uuidv4()}>
                                <p className={`${orderFeedStatusStyle.inProgressOrder} text text_type_digits-default mb-2`} key={uuidv4()}>{item?.number}</p>
                            </Link>
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