import PropTypes from 'prop-types';
import orderDetailsStyles from './order-details.module.css';
import doneImage from '../../images/order accpeted-done.svg';

export const OrderDetails = ({ dataOrder }) => {

    return(
        <div className={`${orderDetailsStyles.wrap} pt-30 pb-30`}>
            <p className={`${orderDetailsStyles.title} text text_type_digits-large mb-8`}>{dataOrder}</p>
            <p className="text text_type_main-medium">идентификатор заказа</p>
            <img className="mt-15 mb-15" src={doneImage} alt="Заказ оформлен" />
            <p className="text text_type_main-small mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

OrderDetails.propTypes = {
    dataOrder: PropTypes.number,
}