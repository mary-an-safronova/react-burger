import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import cardsStyle from './cards.module.css';
import Card from '../card/card';
import { IngredientsContext } from '../../services/ingredientsContext';

const Cards = (props) => {
    const ingredients = useContext(IngredientsContext);

    return (
        <div>
            <h2 className="text text_type_main-medium pb-5 mb-1 mt-5 pt-5" id={props.typesText}>{props.typesText}</h2>
            <ul className={cardsStyle.cards}>
                {ingredients?.map(card => {
                    return (card.type === props.typesItem ? <Card item={card} key={card._id} card={card} handleIngredientClick={props.handleIngredientClick} /> : null)
                })}
            </ul>
        </div>
    )
}

Cards.propTypes = {
    ingredients: PropTypes.shape(ingredientType),
    typesText: PropTypes.string.isRequired,
    typesItem: PropTypes.string.isRequired,
    handleIngredientClick: PropTypes.func.isRequired,
}

export default Cards;