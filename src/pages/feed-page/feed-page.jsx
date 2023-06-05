import feedPageStyle from './feed-page.module.css';
import OrderFeed from '../../components/order-feed/order-feed';
import OrderFeedStatus from '../../components/order-feed-status/order-feed-status';

const FeedPage = () => {
    return (
        <main className={feedPageStyle.mainWrap}>
            <OrderFeed />
            <OrderFeedStatus />
        </main>
    )
}

export default FeedPage;