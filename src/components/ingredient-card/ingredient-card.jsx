import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ingredientCardStyles from './ingredient-card.module.css';
import { ingredientType } from '../../utils/types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { moveIngredient } from '../../services/actions/burger-constructor';

const IngredientCard = ({ deleteElement, ingredient, id, index }) => {

    const dispatch = useDispatch();

    ingredient.id = id;

	const DragDropRef = useRef(null);

	const [, drop] = useDrop({
		accept: 'item',
		hover(ingredient) {
			if (!DragDropRef.current) {
				return;
			}
			const dragIndex = ingredient.id;
			const hoverIndex = index;
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


    return (
        <>
            <div className={`${ingredientCardStyles.card__wrap} mb-4`} id={id} style={{ opacity }} ref={DragDropRef}>
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

IngredientCard.propTypes = {
    ingredient: ingredientType,
    deleteElement: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
}

export default IngredientCard;