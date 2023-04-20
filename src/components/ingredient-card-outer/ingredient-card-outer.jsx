import { useContext } from 'react';
import { IngredientsContext } from '../../services/ingredientsContext';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import ingredientCardOuterStyles from './ingredient-card-outer.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCardOuter = (props) => {
    const ingredients = useContext(IngredientsContext);

    return (
        <div className={`${ingredientCardOuterStyles.card__outer} ml-8 mr-4`}>
            <ConstructorElement
                type={props.position}
                isLocked={true}
                text={`${ingredients[0]?.name} ${props.positionText}`}
                price={ingredients[0]?.price}
                thumbnail={ingredients[0]?.image}
            />
        </div>
    )
}

IngredientCardOuter.propTypes = {
    ingredients: PropTypes.shape(ingredientType),
    position: PropTypes.string.isRequired,
    positionText: PropTypes.string.isRequired
}

export default IngredientCardOuter;