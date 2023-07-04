import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import feedPageStyle from './feed-page.module.css';
import { OrderFeedStatus, OrderFeed } from '../../components';
import { wsConnectionStartAction, wsConnectionClosedAction } from '../../services/actions/ws';
import { wsUrlOrders } from '../../utils/api';

const FeedPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStartAction(`${wsUrlOrders}/all`))
        return () => {
            dispatch(wsConnectionClosedAction())
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