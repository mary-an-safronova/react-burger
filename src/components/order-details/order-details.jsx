import { useState } from 'react';
import orderDetailsStyles from './order-details.module.css';
import doneImage from '../../images/order accpeted-done.svg';

export const OrderDetails = () => {

    return(
        <div className={orderDetailsStyles.wrap}>
            <p className={`${orderDetailsStyles.title} text text_type_digits-large`}>034536</p>
            <p className="text text_type_main-medium">идентификатор заказа</p>
            <img className={orderDetailsStyles.image} src={doneImage} alt="Заказ оформлен" />
            <p className={`${orderDetailsStyles.doneText} text text_type_main-small`}>Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}