import orderStyle from './order.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderFeedTotalPrice } from '..';
import { FC } from 'react';
import { TOrder } from '../../services/types/data';
import { TIngredient, TIngredientWithId } from '../../services/types/data';

type TLocation = {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: any;
}

type TOrderProps = {
    orderNumber: number | string;
    location: TLocation;
    order: TOrder;
    ingredients: Array<TIngredient>;
}

type TImageMobileByID = { [id: string]: string; };
type TNameByID = { [id: string]: string; };
type TPriceByID = { [id: string]: number; };
type TIngredientTypeByID = { [id: string]: string; };
type TIngredientIdByID = { [id: string]: string; };

const Order: FC<TOrderProps> = ({ orderNumber, location, order, ingredients }) => {

    const imageMobileByID: TImageMobileByID = {};
    const nameByID: TNameByID = {};
    const priceByID: TPriceByID = {};
    const ingredientTypeByID: TIngredientTypeByID = {};
    const ingredientIdByID: TIngredientIdByID = {};

    ingredients.forEach((ingredient: TIngredient) => {
        imageMobileByID[ingredient._id] = ingredient.image_mobile;
        nameByID[ingredient._id] = ingredient.name;
        priceByID[ingredient._id] = ingredient.price;
        ingredientTypeByID[ingredient._id] = ingredient.type;
        ingredientIdByID[ingredient._id] = ingredient._id;
    })

    const ingredientCounts: { [key: string]: TIngredientWithId & { count: number; } } | undefined = 
    order?.ingredients?.reduce((acc: any, ingredient) => {
        if (acc[ingredient]) {
            acc[ingredient].count += 1;
        } else {
            acc[ingredient] = {
                name: nameByID[ingredient],
                price: priceByID[ingredient],
                count: 1,
                type: ingredientTypeByID[ingredient],
                image: imageMobileByID[ingredient],
                id: ingredientIdByID[ingredient]
            };
        }
        return acc;
    }, {});

    const ingredientsToDisplay = [];
    for (const key in ingredientCounts) {
        ingredientsToDisplay.push(ingredientCounts[key]);
    }

    const prices: Array<number> = [];

    const navigate = useNavigate()

    return(
        <div className='mb-10 mt-10 mr-10'>
            <h1 className={`${orderNumber} text text_type_digits-medium mb-5 ml-10`}>{`#${order?.number}`}</h1>
            <h2 className="text text_type_main-medium mb-2 ml-10">{order?.name}</h2>
            <p className={`${order?.status === 'done' ? orderStyle.status : orderStyle.statusNoDone} text text_type_main-small mb-15 ml-10`}>{order?.status === 'done' ? 'Выполнен' :  order?.status === 'pending' ? 'Готовится' : 'Создан'}</p>
            <p className="text text_type_main-medium ml-10">Состав:</p>
            <div className={`${orderStyle.scroll} pt-6`}>
                {
                    ingredientsToDisplay.map((ingredient, index) => {
                        prices.push(ingredient.count * ingredient.price)
                        return <div onClick={() => navigate(`/ingredients/${ingredient.id}`, { state: { replace: true } })} className={orderStyle.link} key={index}>
                                    <div className={`${orderStyle.orderIngredientsWrap} mb-4`}>
                                        <div className={orderStyle.imgNameWrap}>
                                            <div className={orderStyle.imgCircle}>
                                                <div className={orderStyle.backgroundCircle}>
                                                    <img className={orderStyle.img} src={ingredient.image} alt={ingredient.name} />
                                                </div>
                                            </div>
                                            <h3 className="text text_type_main-default ml-4">{ingredient.name}</h3>
                                        </div>
                                        <div className={`${orderStyle.priceWrap} mr-6`}>
                                            <p className="text text_type_digits-default mr-2">{`${ingredient.count} x ${ingredient.price}`}</p>
                                            <CurrencyIcon type="primary" />
                                        </div>
                                    </div>
                                </div>
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