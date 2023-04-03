import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import ingredientCardOuterStyles from './ingredient-card-outer.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCardOuter = (props) => {

    return (
        <div className={ingredientCardOuterStyles.card__outer} key={props.data[0]?._id}>
            <ConstructorElement
                type={props.position}
                isLocked={true}
                text={`${props.data[0]?.name} ${props.positionText}`}
                price={props.data[0]?.price}
                thumbnail={props.data[0]?.image}
            />
        </div>
    )
}

IngredientCardOuter.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired,
    position: PropTypes.string.isRequired,
    positionText: PropTypes.string.isRequired
}

export default IngredientCardOuter;