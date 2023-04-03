import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import ingredientCardsStyles from './ingredient-cards.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import IngredientCardOuter from '../ingredient-card-outer/ingredient-card-outer';

const IngredientCards = (props) => {
    const position = {
        top: "top",
        bottom: "bottom"
    }
    
    const positionText = {
        top: "(верх)",
        bottom: "(низ)"
    }

    return (
        <div className={ingredientCardsStyles.cards}>
            <IngredientCardOuter data={props.data} position={position.top} positionText={positionText.top} />
            <div className={ingredientCardsStyles.scroll}>
                <IngredientCard data={props.data} />
            </div>
            <IngredientCardOuter position={position.bottom} data={props.data} positionText={positionText.bottom} />
        </div>
    )
}

IngredientCards.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired,
}

export default IngredientCards;