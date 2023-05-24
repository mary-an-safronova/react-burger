import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import burgerConstructorStyles from './burger-constructor.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import IngredientCardOuter from '../ingredient-card-outer/ingredient-card-outer';
import FinalPrice from '../final-price/final-price';
import { setBun, addIngredient, deleteIngredient } from '../../services/actions/burger-constructor';

const BurgerConstructor = () => {
    const dispatch = useDispatch();

    const constructorIngredients = (state) => state.burgerConstructor;
    const { ingredientList, bunsList } = useSelector(constructorIngredients);

    const addElement = (element) => {
        element = { ...element, id: element._id}
        if (element.type === 'bun') {
            dispatch(setBun(element))
        }
        if (element.type !== 'bun') {
            dispatch(addIngredient(element))
        }
    }

    const [{ opacity } , dropIngredient] = useDrop(() => ({
        accept: 'ingredient',
        collect: monitor => {
            return {
				opacity: monitor.isOver() ? 0.5 : 1,
			}
        },
        drop: (item => addElement(item.ingredient))
    }))

    const deleteElement = (ingredient) => {
        dispatch(deleteIngredient(ingredient))
    }

    const ingredientsId = [];
    const prices = [];

    useMemo(() =>
        bunsList?.filter((bun) => {
            ingredientsId?.push(bun._id)
            prices?.push(bun.price * 2)
        }),
        [bunsList, ingredientsId, prices]
    );

    useMemo(() =>
        ingredientList?.filter((ingredient) => {
            ingredientsId?.push(ingredient._id)
            prices?.push(ingredient.price)
        }),
        [ingredientList, ingredientsId, prices]
    );

    const total = useMemo(() =>
        prices.reduce((sum, price) => {
            return (sum += price);
        }, 0),
        [prices]
    );

    return (
        <section className={burgerConstructorStyles.burgerConstructor} ref={dropIngredient}>
            <ul className={`${burgerConstructorStyles.cards}} mt-25 mb-10 ml-4`} style={{ opacity: opacity }}>
                {bunsList?.map((bun, index) => {
                    return <IngredientCardOuter position={"top"} bun={bun} key={index} /> 
                })}
                <div className={`${burgerConstructorStyles.scroll} mb-4 mt-4`}>
                    {ingredientList?.map((ingredient, index) => {
                        return <IngredientCard ingredient={ingredient} key={uuidv4()} id={index} index={index} deleteElement={deleteElement} ingredientsId={ingredientsId} prices={prices} />
                    })}
                </div>
                {bunsList?.map((bun, index) => {
                    return <IngredientCardOuter position={"bottom"} bun={bun} key={index} />
                })}
            </ul>
            { bunsList.length > 0 ?
            <FinalPrice total={total} ingredientsId={ingredientsId} />
            : <p className={`${burgerConstructorStyles.default_text} text text_type_main-default text_color_inactive`}>
                {ingredientList.length > 0 ? 'Добавьте булку в конструктор бургера' : 'Выберите ингредиенты и перетащите их в конструктор бургера'}
                </p> }
        </section>
    )
}

export default BurgerConstructor;