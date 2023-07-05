import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import burgerConstructorStyles from './burger-constructor.module.css';
import { IngredientCard, IngredientCardOuter, FinalPrice } from '..';
import { setBun, addIngredient, deleteIngredient } from '../../services/actions/burger-constructor';
import { RootState } from '../../services/types';
import { TIngredientWithId } from '../../services/types/data';

const BurgerConstructor = () => {
    const dispatch = useDispatch();

    const constructorIngredients = (state: RootState) => state.burgerConstructor;
    const { ingredientList, bunsList } = useSelector(constructorIngredients);

    const addElement = (element: TIngredientWithId) => {
        const elementIdToNumber = Number(element._id)
        element = { ...element, id: elementIdToNumber}
        if (element.type === 'bun') {
            dispatch(setBun(element))
            ingredientsId.push(element._id);
            ingredientsId.push(element._id);
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
        drop: ((item: any) => addElement(item.ingredient))
    }))

    const deleteElement = (ingredient: TIngredientWithId) => {
        dispatch(deleteIngredient(ingredient))
    }

    const ingredientsId: Array<string> = [];
    const prices: Array<number> = [];

    useMemo(() =>
        bunsList?.filter((bun) => {
            ingredientsId?.push(bun._id, bun._id)
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
                { bunsList?.length <= 0 && ingredientList?.length <= 0 ?
                    <div className={burgerConstructorStyles.wrapForEmptyIngtredients}>
                        <div className={burgerConstructorStyles.emptyBun}><p className={`${burgerConstructorStyles.emptyText} text text_type_main-default text_color_inactive`}>Перетащите булку в конструктор бургера</p></div>
                        <div className={`${burgerConstructorStyles.emptyIngredient} mt-4 mb-4`}><p className={`${burgerConstructorStyles.emptyText} text text_type_main-default text_color_inactive`}>Перетащите ингредиенты в конструктор бургера</p></div>
                        <div className={burgerConstructorStyles.emptyBun}><p className={`${burgerConstructorStyles.emptyText} text text_type_main-default text_color_inactive`}>Перетащите булку в конструктор бургера</p></div>
                    </div> 
                    : null 
                }
                {bunsList?.map((bun, index) => {
                    return <IngredientCardOuter position={"top"} bun={bun} key={index} /> 
                })}
                <div className={`${burgerConstructorStyles.scroll} mb-4 mt-4`}>
                    {ingredientList?.map((ingredient, index) => {
                        return <IngredientCard ingredient={ingredient} key={uuidv4()} id={index} index={index} deleteElement={deleteElement} />
                    })}
                </div>
                {bunsList?.map((bun, index) => {
                    return <IngredientCardOuter position={"bottom"} bun={bun} key={index} />
                })}
            </ul>
            <FinalPrice total={total} ingredientsId={ingredientsId} disabled={bunsList.length > 0 ? false : true} />
        </section>
    )
}

export default BurgerConstructor;