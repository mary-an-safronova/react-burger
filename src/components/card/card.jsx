import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import cardStyle from './card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const Card = (props) => {

    return (
        <li className={cardStyle.card} onClick={() => props.handleIngredientClick(props.card)}>
            <Counter className={cardStyle.card__counter} count={1} size={'default'} />
            <div className={cardStyle.cardWrap} key={props.card._id}>
                <img className={cardStyle.card__image} src={props.card.image} alt={props.card.name} />
                <div className={`${cardStyle.card__price} pb-1 pt-1`}>
                    <p className="text text_type_digits-default mr-2">{props.card.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <h3 className={`${cardStyle.card__title} text text_type_main-default ml-2`}>{props.card.name}</h3>
            </div>
        </li>
    )
}

Card.propTypes = {
    card: ingredientType.isRequired,
    handleIngredientClick: PropTypes.func.isRequired,
}

export default Card;