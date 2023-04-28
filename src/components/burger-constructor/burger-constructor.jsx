import { useSelector } from 'react-redux';
import { ingredientType } from '../../utils/types';
import burgerConstructorStyles from './burger-constructor.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import IngredientCardOuter from '../ingredient-card-outer/ingredient-card-outer';
import FinalPrice from '../final-price/final-price';

const BurgerConstructor = () => {
    const ingredients = useSelector(state => state.burgerIngredients.ingredients);

    const noBunIngredients = ingredients?.filter((ingredient) => {
        return ingredient.type !== "bun";
      });

      const buns = ingredients?.filter(bun => {
        return (bun.type === 'bun')
    })

    const ingredientsId = [];

    const prices = [];

    return (
        <section className={burgerConstructorStyles.burgerConstructor}>
            <div className={`${burgerConstructorStyles.cards} mt-25 mb-10 ml-4`}>
                {buns?.map((bun) => {
                    ingredientsId.push(bun._id)
                    return <IngredientCardOuter position={"top"} bun={bun} key={bun._id} />
                })}
                <div className={burgerConstructorStyles.scroll}>
                    {noBunIngredients?.map((ingredient) => {
                        prices.push(ingredient.price)
                        ingredientsId.push(ingredient._id);
                        return <IngredientCard ingredient={ingredient} key={ingredient._id} />
                    })}
                </div>
                {buns?.map((bun) => {
                    ingredientsId.push(bun._id)
                    return <IngredientCardOuter position={"bottom"} bun={bun} key={bun._id} />
                })}
            </div>
            <FinalPrice prices={prices} bunPrice={buns[0]?.price} ingredientsId={ingredientsId} />
        </section>
    )
}

BurgerConstructor.propTypes = {
    ingredients: ingredientType,
}

export default BurgerConstructor;