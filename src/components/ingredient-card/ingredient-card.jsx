import ingredientCardStyles from './ingredient-card.module.css';
import { ingredientType } from '../../utils/types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = ({ ingredient }) => {

    return (
        <>
            <div className={`${ingredientCardStyles.card__wrap} mb-4`} id="inner-wrap">
                <div className={`${ingredientCardStyles.card__icon} mr-2`}>
                <DragIcon type="primary" />
                </div>
                <div className={`${ingredientCardStyles.card__center} mr-2`}>
                    <ConstructorElement
                        text={ingredient.name}
                        price={ingredient.price}
                        thumbnail={ingredient.image}
                    />
                </div>
            </div>
        </>
    )
}

IngredientCard.propTypes = {
    ingredient: ingredientType,
}

export default IngredientCard;