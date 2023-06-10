import PropTypes from 'prop-types';
import orderStyle from './order.module.css';
import { Link } from 'react-router-dom';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderFeedTotalPrice } from '..';

const Order = ({ orderNumber, location, order, ingredients }) => {

    const imageMobileByID = {};
    const nameByID = {};
    const priceByID = {};
    const ingredientTypeById = {};

    ingredients.forEach((ingredient) => {
        imageMobileByID[ingredient['_id']] = ingredient['image_mobile'];
        nameByID[ingredient['_id']] = ingredient['name'];
        priceByID[ingredient['_id']] = ingredient['price'];
        ingredientTypeById[ingredient['_id']] = ingredient['type'];
    })

    const prices = []

    return(
        <div className='mb-10 mt-10 mr-10'>
            <h1 className={`${orderNumber} text text_type_digits-medium mb-5 ml-10`}>{`#${order?.number}`}</h1>
            <h2 className="text text_type_main-medium mb-2 ml-10">{order?.name}</h2>
            <p className={`${order?.status === 'done' ? orderStyle.status : orderStyle.statusNoDone} text text_type_main-small mb-15 ml-10`}>{order?.status === 'done' ? 'Выполнен' :  order?.status === 'pending' ? 'Готовится' : 'Создан'}</p>
            <p className="text text_type_main-medium ml-10">Состав:</p>
            <div className={`${orderStyle.scroll} pt-6`}>
                {
                    order?.ingredients?.map((ingredient, index) => {
                        ingredientTypeById[ingredient] === 'bun' === 1 ? prices.push(priceByID[ingredient] * 2) : ingredientTypeById[ingredient] === 'bun' === 1 ? prices.push(priceByID[ingredient]) : prices.push(priceByID[ingredient]);
                        return <Link to={{ pathname: `/ingredients/${ingredient}`, state: { background: location } }} className={orderStyle.link} key={index}>
                                    <div className={`${orderStyle.orderIngredientsWrap} mb-4`}>
                                        <div className={orderStyle.imgNameWrap}>
                                            <div className={orderStyle.imgCircle}>
                                                <div className={orderStyle.backgroundCircle}>
                                                    <img className={orderStyle.img} src={imageMobileByID[ingredient]} alt={nameByID[ingredient]} />
                                                </div>
                                            </div>
                                            <h3 className="text text_type_main-default ml-4">{nameByID[ingredient]}</h3>
                                        </div>
                                        <div className={`${orderStyle.priceWrap} mr-6`}>
                                            <p className="text text_type_digits-default mr-2">{`${ingredientTypeById[ingredient] === 'bun' ? '2' : '1'} x ${priceByID[ingredient]}`}</p>
                                            <CurrencyIcon type="primary" />
                                        </div>
                                    </div>
                                </Link>
                    })
                }
            </div>
            <div className={`${orderStyle.datePriceWrap} ml-10`}>
                <span className="text text_type_main-default text_color_inactive"><FormattedDate date={new Date(order?.createdAt)} className="text text_type_main-default text_color_inactive" /> i-GMT+3</span>
                <OrderFeedTotalPrice prices={prices} />
            </div>
        </div>
    )
}

export default Order;

Order.propTypes = {
    orderNumber: PropTypes.string,
}