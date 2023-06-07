import PropTypes from 'prop-types';
import orderStyle from './order.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderFeedTotalPrice } from '..';

const Order = ({ orderNumber }) => {
    const { id } = useParams();
    const orders = useSelector((state) => state.ws.orders);
    const ingredients = useSelector((state) => state.burgerIngredients.ingredients);
    const order = orders?.find((item) => item._id === id);

    const imageMobileByID = {}
    const nameByID = {}
    const priceByID = {}

    ingredients.forEach((ingredient) => {
        imageMobileByID[ingredient['_id']] = ingredient['image_mobile'];
        nameByID[ingredient['_id']] = ingredient['name'];
        priceByID[ingredient['_id']] = ingredient['price'];
    })

    const prices = []

    return(
        <div className='mb-10 mt-10 ml-10 mr-10'>
            <h1 className={`${orderNumber} text text_type_digits-medium mb-5`}>{`#${order?.number}`}</h1>
            <h2 className="text text_type_main-medium mb-2">Black Hole Singularity острый бургер</h2>
            <p className={`${orderStyle.status} text text_type_main-small mb-15`}>{order?.status === 'done' ? 'Выполнен' : 'Готовится'}</p>
            <p className="text text_type_main-medium mb-6">Состав:</p>
            <div className={orderStyle.scroll}>
                {
                    order?.ingredients?.map((ingredient, index) => {
                        prices.push(priceByID[ingredient])
                        return <div className={`${orderStyle.orderIngredientsWrap} mb-4`} key={index}>
                                    <div className={orderStyle.imgNameWrap}>
                                        <div className={orderStyle.imgCircle}>
                                            <div className={orderStyle.backgroundCircle}>
                                                <img className={orderStyle.img} src={imageMobileByID[ingredient]} alt={nameByID[ingredient]} />
                                            </div>
                                        </div>
                                        <h3 className="text text_type_main-default ml-4">{nameByID[ingredient]}</h3>
                                    </div>
                                    <div className={`${orderStyle.priceWrap} mr-6`}>
                                        <p className="text text_type_digits-default mr-2">1&nbsp;x&nbsp;{priceByID[ingredient]}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                </div>
                    })
                }
            </div>
            <div className={orderStyle.datePriceWrap}>
                <span className="text text_type_main-default text_color_inactive"><FormattedDate date={new Date(order.createdAt)} className="text text_type_main-default text_color_inactive" /> i-GMT+3</span>
                <OrderFeedTotalPrice prices={prices} />
            </div>
        </div>
    )
}

export default Order;

Order.propTypes = {
    orderNumber: PropTypes.string,
}