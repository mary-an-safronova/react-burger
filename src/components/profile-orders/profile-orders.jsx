import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import profileOrdersStyle from './profile-orders.module.css';
import { OrderCard } from '..';
import { getData } from '../../services/actions/burger-ingredients';
import { v4 as uuidv4 } from 'uuid';
import { wsConnectionStart, wsConnectionClosed } from '../../services/actions/wsActionTypes';
import { getCookie } from '../../utils/cookie';

const ProfileOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.ws.orders);

    const accessToken = getCookie("accessToken").replace('Bearer ', '');

    useEffect(() => {
        dispatch(wsConnectionStart(`wss://norma.nomoreparties.space/orders?token=${accessToken}`))
        return () => {
            dispatch(wsConnectionClosed())
          }
    }, [dispatch])

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    

    return (
        <section className={`${profileOrdersStyle.mainWrap} pt-5`}>
            <div className={profileOrdersStyle.scroll}>
                {
                    orders?.map((order) => {
                        const status = <p className={`${order?.status === 'done' ? profileOrdersStyle.status : profileOrdersStyle.statusNoDone} text text_type_main-small mt-2`}>{order?.status === 'done' ? 'Выполнен' : 'Готовится'}</p>
                        return <OrderCard order={order} cardWidthStyle={profileOrdersStyle.cardWidth} children={status} ProfileOrders={true} key={uuidv4()}/>
                    })
                }
            </div>
        </section>
    )
}

export default ProfileOrders;