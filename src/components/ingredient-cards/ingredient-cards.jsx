import ingredientCardsStyles from './ingredient-cards.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import IngredientCardOuter from '../ingredient-card-outer/ingredient-card-outer';

const IngredientCards = () => {

    const position = {
        top: "top",
        bottom: "bottom"
    }
    
    const positionText = {
        top: "(верх)",
        bottom: "(низ)"
    }

    return (
        <div className={`${ingredientCardsStyles.cards} mt-25 mb-10 ml-4`}>
            <IngredientCardOuter position={position.top} positionText={positionText.top} />
            <div className={ingredientCardsStyles.scroll}>
                <IngredientCard />
            </div>
            <IngredientCardOuter position={position.bottom} positionText={positionText.bottom} />
        </div>
    )
}

export default IngredientCards;