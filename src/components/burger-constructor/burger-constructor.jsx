import { useSelector } from 'react-redux';
import { ingredientType } from '../../utils/types';
import burgerConstructorStyles from './burger-constructor.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import IngredientCardOuter from '../ingredient-card-outer/ingredient-card-outer';
import FinalPrice from '../final-price/final-price';

const BurgerConstructor = () => {
    const ingredients = useSelector(state => state.burgerIngredients.ingredients);

    const noBunIngredients = ingredients.filter((ingredient) => {
        return ingredient.type !== "bun";
      });

      const buns = ingredients.filter(bun => {
        return (bun.type === 'bun')
    })

    const ingredientsOder = [buns[0]?._id];

    const prices = [];

    const topBun = <IngredientCardOuter position={"top"} bun={buns[0]} />;

    return (
        <section className={burgerConstructorStyles.burgerConstructor}>
            <div className={`${burgerConstructorStyles.cards} mt-25 mb-10 ml-4`}>
                { topBun }
                <div className={burgerConstructorStyles.scroll}>
                    {noBunIngredients.map((ingredient) => {
                        prices.push(ingredient.price)
                        ingredientsOder.push(ingredient._id);
                        return <IngredientCard ingredient={ingredient} key={ingredient._id} />
                    })}
                </div>
                { topBun && <IngredientCardOuter position={"bottom"} bun={buns[0]} /> }
            </div>
            <FinalPrice prices={prices} bunPrice={buns[0]?.price} ingredientsOder={ingredientsOder} />
        </section>
    )
}

BurgerConstructor.propTypes = {
    ingredients: ingredientType,
}

export default BurgerConstructor;