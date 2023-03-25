import React from 'react';
import cardStyle from './card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const Card = (props) => {
    return (
        <li className={cardStyle.card}>
            <Counter className={cardStyle.card__counter} count={1} size="default" />
            <img className={cardStyle.card__image} src={props.item.image} alt={props.item.name} />
            <div className={`${cardStyle.card__price} mb-1 mt-1`}>
                <p className="text text_type_digits-default mr-2">20</p>
                <CurrencyIcon type="primary" />
            </div>
            <h3 className={`${cardStyle.card__title} text text_type_main-default ml-2`}>{props.item.name}</h3>
        </li>
    )
}

export default Card;