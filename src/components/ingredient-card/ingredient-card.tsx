import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd'
import { useDispatch } from '../../services/hooks';
import ingredientCardStyles from './ingredient-card.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { moveIngredient } from '../../services/actions/burger-constructor';
import { TIngredientWithId } from '../../services/types/data';
import { FC } from 'react';

type TIngredientCard = {
    readonly deleteElement: (ingredient: TIngredientWithId) => void;
    readonly ingredient: TIngredientWithId
    id: number;
    index: number;
}

const IngredientCard: FC<TIngredientCard> = ({ deleteElement, ingredient, id, index }) => {

    const dispatch = useDispatch();

    ingredient.id = id;

	const DragDropRef = useRef(null);

	const [, drop] = useDrop({
		accept: 'item',
		hover(ingredient: TIngredientWithId) {
			if (!DragDropRef.current) {
				return;
			}
			const dragIndex: number = ingredient.id;
			const hoverIndex: number = index;
			dispatch(moveIngredient(dragIndex, hoverIndex));
			ingredient.id = hoverIndex;
		},
	});

	const [{ opacity }, drag] = useDrag({
		type: 'item',
		item: { id, index },
		collect: (monitor) => {
			return {
				opacity: monitor.isDragging() ? 0.5 : 1,
			};
		},
	});

	drag(drop(DragDropRef));

    const idAttribute = id.toString();

    return (
        <>
            <div className={`${ingredientCardStyles.card__wrap} mb-4`} id={idAttribute} style={{ opacity }} ref={DragDropRef}>
                <div className={`${ingredientCardStyles.card__icon} mr-2`}>
                <DragIcon type="primary" />
                </div>
                <div className={`${ingredientCardStyles.card__center} mr-2`}>
                    <ConstructorElement
                        text={ingredient.name}
                        price={ingredient.price}
                        thumbnail={ingredient.image}
                        handleClose={() => deleteElement(ingredient)}
                    />
                </div>
            </div>
        </>
    )
}

export default IngredientCard;