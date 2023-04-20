import { useContext } from 'react';
import { IngredientsContext } from '../../services/ingredientsContext';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import ingredientCardStyles from './ingredient-card.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = () => {
    const ingredients = useContext(IngredientsContext);

    return (
        <>
            {ingredients.map((ingredient, index) => {
                return (ingredient.type !== 'bun' ?
                <div className={`${ingredientCardStyles.card__wrap} mb-4`} id="inner-wrap" key={index}>
                    <div className={`${ingredientCardStyles.card__icon} mr-2`}>
                    <DragIcon type="primary" />
                    </div>
                    <div className={`${ingredientCardStyles.card__center} mr-2`} key={ingredient._id}>
                        <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
                        />
                    </div>
                </div> : null)
            })}
        </>
    )
}

IngredientCard.propTypes = {
    ingredients: PropTypes.shape(ingredientType),
}

export default IngredientCard;