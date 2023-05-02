import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import burgerConstructorStyles from './burger-constructor.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import IngredientCardOuter from '../ingredient-card-outer/ingredient-card-outer';
import FinalPrice from '../final-price/final-price';
import { setBun, addIngredient, deleteIngredient } from '../../services/actions/burger-constructor';

const BurgerConstructor = () => {
    const dispatch = useDispatch();

    const ingredientList = useSelector(state => state.burgerConstructor.ingredientList)
    const bunsList = useSelector(state => state.burgerConstructor.bunsList)

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

    return (
        <section className={burgerConstructorStyles.burgerConstructor} ref={dropIngredient}>
            <ul className={`${burgerConstructorStyles.cards}} mt-25 mb-10 ml-4`} style={{ opacity: opacity }}>
                {bunsList?.map((bun, index) => {
                    if (bun.type === 'bun')
                        ingredientsId.push(bun._id)
                        prices.push(bun.price)
                        return <IngredientCardOuter position={"top"} bun={bun} key={index} />
                })}
                <div className={`${burgerConstructorStyles.scroll} mb-4 mt-4`}>
                    {ingredientList?.map((ingredient, index) => {
                        if (ingredient.type !== 'bun')
                            prices.push(ingredient.price)
                            ingredientsId.push(ingredient._id);
                            return <IngredientCard ingredient={ingredient} key={uuidv4()} id={index} index={index} deleteElement={deleteElement} />
                    })}
                </div>
                {bunsList?.map((bun, index) => {
                    if (bun.type === 'bun')
                        ingredientsId.push(bun._id)
                        prices.push(bun.price)
                        return <IngredientCardOuter position={"bottom"} bun={bun} key={index} />
                })}
            </ul>
            { bunsList.length > 0 ?
            <FinalPrice prices={prices} ingredientsId={ingredientsId} />
            : <p className={`${burgerConstructorStyles.default_text} text text_type_main-default text_color_inactive`}>
                {ingredientList.length > 0 ? 'Добавьте булку в конструктор бургера' : 'Выберите ингредиенты и перетащите их в конструктор бургера'}
                </p> }
        </section>
    )
}

export default BurgerConstructor;