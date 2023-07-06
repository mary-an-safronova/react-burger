import PropTypes from 'prop-types';
import ingredientDetailsStyles from './ingredient-details.module.css';
import { useSelector } from '../../services/hooks';
import { useParams } from 'react-router-dom';
import { RootState } from '../../services/types';
import { FC } from 'react';

type TIngredientDetailsProps = {
    readonly titleClassName?: string;
}

export const IngredientDetails: FC<TIngredientDetailsProps> = ({ titleClassName }) => {
    const { id } = useParams();
    const cards = useSelector((store: RootState) => store.burgerIngredients.ingredients)
    const card = cards?.find((item) => item._id === id);

    return(
        <div className='mb-15 mt-15 ml-10 mr-10'>
            <h1 className={`${titleClassName} text text_type_main-large`}>Детали ингредиента</h1>
            <div className={ingredientDetailsStyles.wrap}>
                <img className={`${ingredientDetailsStyles.image} mb-4`} src={card?.image} alt={card?.image} />
                <p className={`${ingredientDetailsStyles.name} text text_type_main-medium  mb-8`}>{card?.name}</p>
                <ul className={ingredientDetailsStyles.energyValueWrap}>
                    <li className={`${ingredientDetailsStyles.energyValue} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                        <p className="text text_type_main-default text_color_inactive">{card?.calories}</p>
                    </li>
                    <li className={`${ingredientDetailsStyles.energyValue} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                        <p className="text text_type_main-default text_color_inactive">{card?.proteins}</p>
                    </li>
                    <li className={`${ingredientDetailsStyles.energyValue} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                        <p className="text text_type_main-default text_color_inactive">{card?.fat}</p>
                    </li>
                    <li className={ingredientDetailsStyles.energyValue}>
                        <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                        <p className="text text_type_main-default text_color_inactive">{card?.carbohydrates}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    titleClassName: PropTypes.string,
}