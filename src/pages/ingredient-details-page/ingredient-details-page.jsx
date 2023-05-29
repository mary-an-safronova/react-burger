import ingredientDetailsPageStyle from './ingredient-details-page.module.css';
import { IngredientDetails } from '../../components/ingredient-details/ingredient-details';

const IngredientDetailsPage = () => {
    return (
        <div className={`${ingredientDetailsPageStyle.wrap} pt-15`}>
            <IngredientDetails titleClassName={ingredientDetailsPageStyle.title} />
        </div>
    )
}

export default IngredientDetailsPage;