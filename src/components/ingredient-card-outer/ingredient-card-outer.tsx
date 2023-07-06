import ingredientCardOuterStyles from './ingredient-card-outer.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { TIngredient } from '../../services/types/data';

type TIngredientCardOuter = {
    readonly position: "top" | "bottom" | undefined;
    readonly bun: TIngredient;
}

const IngredientCardOuter: FC<TIngredientCardOuter> = ({ position, bun }) => {

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

export default IngredientCardOuter;