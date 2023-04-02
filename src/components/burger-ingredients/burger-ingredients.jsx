import Switch from '../switch/switch.jsx';
import burgerIngredientsStyle from  './burger-ingredients.module.css';
import Cards from '../cards/cards';
import { ingredientTypes } from '../../utils/constants.js';

const BurgerIngredients = (props) => {
    return (
        <section className={`${burgerIngredientsStyle.ingredients} mt-5 pt-5`}>
            <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
            <Switch ingredients={ ingredientTypes } />
            <div className={burgerIngredientsStyle.scroll}>
                {ingredientTypes.map((item, index) => {
                    return <Cards data={props.data} types={ingredientTypes} typesItem={item.type} typesText={item.text} key={index} handleIngredientClick={props.handleIngredientClick} />
                })}
            </div>
        </section>
    )
}

export default BurgerIngredients;