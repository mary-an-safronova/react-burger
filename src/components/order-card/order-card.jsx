import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import orderCardStyle from './order-card.module.css';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderFeedTotalPrice } from '..';
import { PATH } from '../../utils/api';

export default memo(function OrderCard({ order, cardWidthStyle, children, profileOrders, number }) {
    const ingredients = useSelector((state) => state.burgerIngredients.ingredients);

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

    const zIndex = (index) => {
        return index === 0 ? 10 : index === 1 ? 9 : index === 2 ? 8 : index === 3 ? 7 : index === 4 ? 6 : index === 5 ? 5 : null;
    }

    const prices = []

    return (
        <Link className={orderCardStyle.link} 
        to={ profileOrders ? `/profile/orders/${order._id}` : `/feed/${order._id}`}
        state={ profileOrders ? { modalFromProfilePage: true, background: PATH.PROFILE_ORDERS } : { modalFromFeedPage: true, background: PATH.FEED }}>
            <div className={`${orderCardStyle.cardWrap} ${cardWidthStyle} mb-4 mr-2 ml-1 mt-5`} >
                <div  className={`${orderCardStyle.infoWrap} mb-6`}>
                    <h2 className="text text_type_digits-default">{`#${number}`}</h2>
                    <span className="text text_type_main-default text_color_inactive"><FormattedDate date={new Date(order?.createdAt)} className="text text_type_main-default text_color_inactive" /> i-GMT+3</span>
                </div>
                <h1 className="text text_type_main-medium">{order?.name}</h1>
                { children }
                <div className={`${orderCardStyle.wrap} mt-6`}>
                    <div className={orderCardStyle.imgWrap}>
                        {
                            order?.ingredients?.map((ingredient, index) => {
                                prices.push(priceByID[ingredient])
                                if(index < 5 || (order?.ingredients?.length === 6 && index === 5)) {
                                    return  <div className={orderCardStyle.imgCircle} key={index} style={{ zIndex: zIndex(index) }}>
                                                    <div className={orderCardStyle.backgroundCircle}>
                                                        <img className={orderCardStyle.img} src={imageMobileByID[ingredient]} alt={nameByID[ingredient]} />
                                                    </div>
                                                </div>
                                            
                                } else if (order?.ingredients?.length > 6 && index === 5) {
                                    return  <div className={orderCardStyle.imgCircle} key={index} style={{ zIndex: zIndex(index) }}>
                                                <div className={orderCardStyle.imgCircle}>
                                                    <div className={orderCardStyle.backgroundCircle}>
                                                        <img className={orderCardStyle.img} src={imageMobileByID[ingredient]} alt={nameByID[ingredient]} />
                                                    </div>
                                                </div>
                                                <div className={orderCardStyle.lastImgCover}></div>
                                                <p className={`${orderCardStyle.lastImgText} text text_type_main-default`}>{`+${order?.ingredients?.length - 6}`}</p>
                                            </div>
                                } else {
                                    return null
                                }
                            })
                        }
                    </div>
                    <OrderFeedTotalPrice prices={prices} />
                </div>
            </div>
        </Link>
    )
})