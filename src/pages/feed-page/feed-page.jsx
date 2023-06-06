import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import feedPageStyle from './feed-page.module.css';
import OrderFeed from '../../components/order-feed/order-feed';
import OrderFeedStatus from '../../components/order-feed-status/order-feed-status';
import { wsConnectionStart, wsConnectionClosed } from '../../services/actions/wsActionTypes';

const FeedPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart('wss://norma.nomoreparties.space/orders/all'))
        return () => {
            dispatch(wsConnectionClosed())
          }
    }, [dispatch])

    return (
        <main className={feedPageStyle.mainWrap}>
            <OrderFeed />
            <OrderFeedStatus />
        </main>
    )
}

export default FeedPage;