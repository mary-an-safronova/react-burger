import { useContext } from 'react';
import { IngredientsContext } from '../../services/ingredientsContext';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import burgerConstructorStyles from './burger-constructor.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import IngredientCardOuter from '../ingredient-card-outer/ingredient-card-outer';
import FinalPrice from '../final-price/final-price';

const BurgerConstructor = ({ handleOrderButtonClick}) => {
    const ingredients = useContext(IngredientsContext);

    const noBunIngredients = ingredients.filter((ingredient) => {
        return ingredient.type !== "bun";
      });

      const buns = ingredients.filter(bun => {
        return (bun.type === 'bun')
    })

    const prices = [];

    const topBun = <IngredientCardOuter position={"top"} bun={buns[0]} />;

    return (
        <section className={burgerConstructorStyles.burgerConstructor}>
            <div className={`${burgerConstructorStyles.cards} mt-25 mb-10 ml-4`}>
                { topBun }
                <div className={burgerConstructorStyles.scroll}>
                    {noBunIngredients.map((ingredient) => {
                        prices.push(ingredient.price)
                        return <IngredientCard ingredient={ingredient} key={ingredient._id} />
                    })}
                </div>
                { topBun && <IngredientCardOuter position={"bottom"} bun={buns[0]} /> }
            </div>
            <FinalPrice handleOrderButtonClick={handleOrderButtonClick} prices={prices} bunPrice={buns[0]?.price} />
        </section>
    )
}

BurgerConstructor.propTypes = {
    ingredients: ingredientType,
    handleOrderButtonClick: PropTypes.func.isRequired,
}

export default BurgerConstructor;