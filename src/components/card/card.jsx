import React from 'react';
import PropTypes from 'prop-types';
import cardStyle from './card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const Card = (props) => {
    const [count, setCount] = React.useState(null);
    const [visible, setVisible] = React.useState('undefined');

    const handleCountClick = () => {
        setCount(count + 1);
        setVisible('default');
    }

    return (
        <li className={cardStyle.card} onClick={handleCountClick}>
            <Counter className={cardStyle.card__counter} count={count} size={visible} />
            <img className={cardStyle.card__image} src={props.item.image} alt={props.item.name} />
            <div className={`${cardStyle.card__price} mb-1 mt-1`}>
                <p className="text text_type_digits-default mr-2">{props.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <h3 className={`${cardStyle.card__title} text text_type_main-default ml-2`}>{props.item.name}</h3>
        </li>
    )
}

Card.propTypes = {
    item: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired
}

export default Card;