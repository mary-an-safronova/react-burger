import orderFeedStyle from './order-feed.module.css';
import OrderCard from '../order-card/order-card';

const OrderFeed = () => {
    return (
        <section className={`${orderFeedStyle.wrap} mt-5 pt-5`}>
            <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
            <div className={orderFeedStyle.scroll}>
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
        </section>
    )
}

export default OrderFeed;