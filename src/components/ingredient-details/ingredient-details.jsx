import React from 'react';
import ingredientDetailsStyles from './ingredient-details.module.css';

export const IngredientDetails = (props) => {

    return(
        <div>
            <h1 className={`${ingredientDetailsStyles.title} text text_type_main-large`}>Детали ингредиента</h1>
            <div className={ingredientDetailsStyles.wrap}>
                <img className={ingredientDetailsStyles.image} src={props.data[0]?.image} alt={props.data[0]?.image} />
                <p className={`${ingredientDetailsStyles.name} text text_type_main-medium`}>{props.data[0]?.name}</p>
                <ul className={ingredientDetailsStyles.energyValueWrap}>
                    <li className={ingredientDetailsStyles.energyValue}>
                        <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                        <p className="text text_type_main-default text_color_inactive">{props.data[0]?.calories}</p>
                    </li>
                    <li className={ingredientDetailsStyles.energyValue}>
                        <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                        <p className="text text_type_main-default text_color_inactive">{props.data[0]?.proteins}</p>
                    </li>
                    <li className={ingredientDetailsStyles.energyValue}>
                        <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                        <p className="text text_type_main-default text_color_inactive">{props.data[0]?.fat}</p>
                    </li>
                    <li className={ingredientDetailsStyles.energyValue}>
                        <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                        <p className="text text_type_main-default text_color_inactive">{props.data[0]?.carbohydrates}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
