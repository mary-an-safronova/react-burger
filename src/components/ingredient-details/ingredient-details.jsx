import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import ingredientDetailsStyles from './ingredient-details.module.css';

export const IngredientDetails = (props) => {

    return(
        <div className='mb-15 mt-15 ml-10 mr-10'>
            <h1 className="text text_type_main-large">Детали ингредиента</h1>
            <div className={ingredientDetailsStyles.wrap}>
                <img className={`${ingredientDetailsStyles.image} mb-4`} src={props.card.image} alt={props.card.image} />
                <p className={`${ingredientDetailsStyles.name} text text_type_main-medium  mb-8`}>{props.card.name}</p>
                <ul className={ingredientDetailsStyles.energyValueWrap}>
                    <li className={`${ingredientDetailsStyles.energyValue} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                        <p className="text text_type_main-default text_color_inactive">{props.card.calories}</p>
                    </li>
                    <li className={`${ingredientDetailsStyles.energyValue} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                        <p className="text text_type_main-default text_color_inactive">{props.card.proteins}</p>
                    </li>
                    <li className={`${ingredientDetailsStyles.energyValue} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                        <p className="text text_type_main-default text_color_inactive">{props.card.fat}</p>
                    </li>
                    <li className={ingredientDetailsStyles.energyValue}>
                        <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                        <p className="text text_type_main-default text_color_inactive">{props.card.carbohydrates}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    card: ingredientType.isRequired,
}
