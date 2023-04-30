import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import cardStyle from './card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const Card = (props) => {

    const ingredientList = useSelector(state => state.burgerConstructor.ingredientList)
    const bunsList = useSelector(state => state.burgerConstructor.bunsList)

    const counter = useMemo(() => (
        ingredientList.filter((item) => item._id === props.card._id).length || bunsList.filter((item) => item._id === props.card._id).length * 2
    ), [ingredientList, bunsList, props.card._id]);

    const [{ opacity } , dragIngredient] = useDrag(() => ({
        type: 'ingredient',
        collect: monitor => {
            return {
				opacity: monitor.isDragging() ? 0.5 : 1,
			}
        },
        item: {
            ingredient: props.card,
            id: props.card._id,
            type: props.card.type,
        },
    }), [])

    return (
        <li className={cardStyle.card} onClick={() => props.handleIngredientClick(props.card)} ref={dragIngredient}  style={{ opacity: opacity }}>
            <Counter className={cardStyle.card__counter} count={counter > 0 ? counter : null} size={counter > 0 ? 'default' : 'undefined'} />
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
    card: ingredientType,
    handleIngredientClick: PropTypes.func.isRequired,
}

export default Card;