import orderFeedStatusStyle from './order-feed-status.module.css';

const OrderFeedStatus = () => {
    return (
        <section className={`${orderFeedStatusStyle.mainWrap} mt-25`}>
            <div className={orderFeedStatusStyle.statusWrap}>
                <div className={orderFeedStatusStyle.doneWrap}>
                    <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
                    <div className={`${orderFeedStatusStyle.orders} ${orderFeedStatusStyle.scroll} mr-9`}>
                        <p className={`${orderFeedStatusStyle.doneOrder} text text_type_digits-default mb-2`}>034533</p>
                        <p className={`${orderFeedStatusStyle.doneOrder} text text_type_digits-default mb-2`}>034533</p>
                        <p className={`${orderFeedStatusStyle.doneOrder} text text_type_digits-default mb-2`}>034533</p>
                        <p className={`${orderFeedStatusStyle.doneOrder} text text_type_digits-default mb-2`}>034533</p>
                        <p className={`${orderFeedStatusStyle.doneOrder} text text_type_digits-default mb-2`}>034533</p>
                        <p className={`${orderFeedStatusStyle.doneOrder} text text_type_digits-default mb-2`}>034533</p>
                    </div>
                </div>
                <div className={orderFeedStatusStyle.inProgressWrap}>
                <h3 className="text text_type_main-medium mb-6">В работе:</h3>
                    <div className={`${orderFeedStatusStyle.orders} ${orderFeedStatusStyle.scroll} mr-9`}>
                        <p className={`${orderFeedStatusStyle.inProgressOrder} text text_type_digits-default mb-2`}>034538</p>
                        <p className={`${orderFeedStatusStyle.inProgressOrder} text text_type_digits-default mb-2`}>034538</p>
                        <p className={`${orderFeedStatusStyle.inProgressOrder} text text_type_digits-default mb-2`}>034538</p>
                        <p className={`${orderFeedStatusStyle.inProgressOrder} text text_type_digits-default mb-2`}>034538</p>
                        <p className={`${orderFeedStatusStyle.inProgressOrder} text text_type_digits-default mb-2`}>034538</p>
                        <p className={`${orderFeedStatusStyle.inProgressOrder} text text_type_digits-default mb-2`}>034538</p>
                    </div>
                </div>
            </div>
            <div className="mt-15">
                    <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
                    <p className="text text_type_digits-large">28 752</p>
                </div>
                <div className="mt-15">
                    <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
                    <p className="text text_type_digits-large">138</p>
                </div>
        </section>
    )
}

export default OrderFeedStatus;