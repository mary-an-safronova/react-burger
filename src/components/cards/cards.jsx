import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import cardsStyle from './cards.module.css';
import Card from '../card/card';

const Cards = (props) => {
    const ingredients = useSelector(state => state.burgerIngredients.ingredients);

    return (
        <div>
            <h2 className="text text_type_main-medium pb-5 mb-1 mt-5 pt-5" ref={props.scrollToRef} id={props.typesText}>{props.typesText}</h2>
            <ul className={cardsStyle.cards}>
                {ingredients?.map(card => {
                    return (card.type === props.typesItem ? <Card item={card} key={card._id} card={card} handleIngredientClick={props.handleIngredientClick} /> : null)
                })}
            </ul>
        </div>
    )
}

Cards.propTypes = {
    ingredients: ingredientType,
    typesText: PropTypes.string.isRequired,
    typesItem: PropTypes.string.isRequired,
}

export default Cards;