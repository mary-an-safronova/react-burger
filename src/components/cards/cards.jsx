import React from 'react';
import cardsStyle from './cards.module.css';
import Card from '../card/card';

const Cards = (props) => {

    return (
        <div>
            <h2 className="text text_type_main-medium pb-5 mb-1 mt-5 pt-5" id={props.typesText}>{props.typesText}</h2>
            <ul className={cardsStyle.cards}>
                {props.cards?.map(card => {
                    return (card.type === props.typesItem ? <Card item={card} key={card._id} /> : null)
                })}
            </ul>
        </div>
    )
}

export default Cards;