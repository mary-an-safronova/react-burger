import React from 'react';
import PropTypes from 'prop-types';
import cardsStyle from './cards.module.css';
import Card from '../card/card';
import { ingredientType } from '../../utils/types';

const Cards = (props) => {

    return (
        <div>
            <h2 className="text text_type_main-medium pb-5 mb-1 mt-5 pt-5" id={props.typesText}>{props.typesText}</h2>
            <ul className={cardsStyle.cards}>
                {props.cards?.map(card => {
                    return (card.type === props.typesItem ? <Card data={props.cards} item={card} key={card._id} price={card.price} /> : null)
                })}
            </ul>
        </div>
    )
}

Cards.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape(ingredientType.data)).isRequired,
    typesText: PropTypes.string.isRequired,
    typesItem: PropTypes.string.isRequired

}

export default Cards;