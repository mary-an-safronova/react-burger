import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../../services/actions/burger-ingredients';
import ingredientDetailsPageStyle from './ingredient-details-page.module.css';
import { IngredientDetails } from '../../components'

const IngredientDetailsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])


    return (
        <div className={`${ingredientDetailsPageStyle.wrap} pt-15`}>
            <IngredientDetails titleClassName={ingredientDetailsPageStyle.title} />
        </div>
    )
}

export default IngredientDetailsPage;