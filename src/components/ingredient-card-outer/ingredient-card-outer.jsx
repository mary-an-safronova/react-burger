import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import ingredientCardOuterStyles from './ingredient-card-outer.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCardOuter = ({ position, bun }) => {

    return (
        <li className={`${ingredientCardOuterStyles.card__outer} ml-8 mr-4`} key={bun._id}>
            <ConstructorElement
                type={position}
                isLocked={true}
                text={`${bun.name} ${position === "top" ? "(верх)" : "(низ)"}`}
                price={bun.price}
                thumbnail={bun.image}
            />
        </li>
    )
}

IngredientCardOuter.propTypes = {
    position: PropTypes.string.isRequired,
    bun: ingredientType,
}

export default IngredientCardOuter;