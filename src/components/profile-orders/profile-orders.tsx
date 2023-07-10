import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import profileOrdersStyle from './profile-orders.module.css';
import { OrderCard } from '..';
import { getData } from '../../services/actions/burger-ingredients';
import { v4 as uuidv4 } from 'uuid';
import { wsAuthConnectionStartAction, wsAuthConnectionClosedAction } from '../../services/actions/ws-auth';
import { getCookie } from '../../utils/cookie';
import { wsUrlOrders } from '../../utils/api';
import { RootState } from '../../services/types';

const ProfileOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state: RootState) => state.wsAuth.orders);

    const accessToken = getCookie("accessToken").replace('Bearer ', '');

    useEffect(() => {
        dispatch(wsAuthConnectionStartAction(`${wsUrlOrders}?token=${accessToken}`));
        return () => {
            dispatch(wsAuthConnectionClosedAction());
        }
    }, [dispatch, accessToken])

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    return (
        <section className={`${profileOrdersStyle.mainWrap} pt-5`}>
            <div className={profileOrdersStyle.scroll}>
                {
                    orders?.map((order) => {
                        const status = <p className={`${order?.status === 'done' ? profileOrdersStyle.status : profileOrdersStyle.statusNoDone} text text_type_main-small mt-2`}>{order?.status === 'done' ? 'Выполнен' : order?.status === 'pending' ? 'Готовится' : 'Создан'}</p>
                        return <OrderCard order={order} cardWidthStyle={profileOrdersStyle.cardWidth} children={status} profileOrders={true} number={order?.number} key={uuidv4()}/>
                    }).reverse()
                }
            </div>
        </section>
    )
}

export default ProfileOrders;