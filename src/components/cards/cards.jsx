import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import cardsStyle from './cards.module.css';
import Card from '../card/card';

const Cards = ({ scrollToRef, typesItem, typesText, handleIngredientClick }) => {

    const burgerIngredients = (state) => state.burgerIngredients;
    const { ingredients } = useSelector(burgerIngredients);

    return (
        <div>
            <h2 className="text text_type_main-medium pb-5 mb-1 mt-5 pt-5" ref={scrollToRef} id={typesItem}>{typesText}</h2>
            <ul className={cardsStyle.cards}>
                {ingredients?.map(card => {
                    return (card.type === typesItem ? <Card item={card} key={card._id} card={card} handleIngredientClick={() => {handleIngredientClick(card)}} /> : null)
                })}
            </ul>
        </div>
    )
}

Cards.propTypes = {
    typesText: PropTypes.string.isRequired,
    typesItem: PropTypes.string.isRequired,
    handleIngredientClick: PropTypes.func.isRequired,
    scrollToRef: PropTypes.func.isRequired,
}

export default Cards;