import orderCardStyle from './order-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import bunImg from '../../images/bun-01.png';

const OrderCard = () => {
    return (
        <div className={`${orderCardStyle.cardWrap} mb-4 mr-2`}>
            <div  className={`${orderCardStyle.infoWrap} mb-6`}>
                <h2 className="text text_type_digits-default">#034535</h2>
                <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
            </div>
            <h1 className="text text_type_main-medium mb-6">Death Star Starship Main бургер</h1>
            <div className={orderCardStyle.wrap}>
                <div className={orderCardStyle.imgWrap}>
                    <img className={orderCardStyle.img} src={bunImg} alt="" style={{zIndex: 7}} />
                    <img className={orderCardStyle.img} src={bunImg} alt="" style={{zIndex: 6}} />
                    <img className={orderCardStyle.img} src={bunImg} alt="" style={{zIndex: 5}} />
                    <img className={orderCardStyle.img} src={bunImg} alt="" style={{zIndex: 4}} />
                    <img className={orderCardStyle.img} src={bunImg} alt="" style={{zIndex: 3}} />
                    <div className={orderCardStyle.lastImgWrap}>
                        <img className={`${orderCardStyle.img} ${orderCardStyle.lastImg}`} src={bunImg} alt="" />
                        <div className={orderCardStyle.lastImgCover}></div>
                        <p className={`${orderCardStyle.lastImgText} text text_type_main-default`}>+3</p>
                    </div>
                </div>
                <div className={`${orderCardStyle.priceWrap} ml-6`}>
                    <p className="text text_type_digits-default mr-2">480</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}

export default OrderCard;