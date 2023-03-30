import React from "react";
import PropTypes from 'prop-types';
import ingredientCardStyles from './ingredient-card.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types'

const IngredientCard = (props) => {

    return (
        <>
            {props.data?.map((ingredient, index) => {
                return (ingredient.type !== 'bun' ?
                <div className={ingredientCardStyles.card__wrap} id="inner-wrap" key={index}>
                    <div className={`${ingredientCardStyles.card__icon} mr-2`}>
                    <DragIcon type="primary" />
                    </div>
                    <div className={ingredientCardStyles.card__center} key={ingredient._id}>
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
    data: PropTypes.arrayOf(PropTypes.shape(ingredientType.data)).isRequired
}

export default IngredientCard;