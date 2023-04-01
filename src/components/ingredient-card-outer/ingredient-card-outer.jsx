import PropTypes from 'prop-types';
import ingredientCardOuterStyles from './ingredient-card-outer.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCardOuter = (props) => {

    return (
        <>
            {props.data?.map((ingredient) => {
                return (ingredient.type === 'bun' ?
                <div className={ingredientCardOuterStyles.card__outer} key={ingredient._id}>
                    <ConstructorElement
                        type={props.position}
                        isLocked={true}
                        text={`${ingredient.name} ${props.positionText}`}
                        price={ingredient.price}
                        thumbnail={ingredient.image}
                    />
                </div> : null)
            })}
        </>
    )
}

IngredientCardOuter.propTypes = {
    position: PropTypes.string.isRequired,
    positionText: PropTypes.string.isRequired
}

export default IngredientCardOuter;