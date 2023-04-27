import { useSelector, useDispatch } from 'react-redux';
import { useRef } from "react";
import Switch from '../switch/switch.jsx';
import burgerIngredientsStyle from  './burger-ingredients.module.css';
import Cards from '../cards/cards';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details.jsx';
import { addIgredientDetails, deleteIgredientDetails } from '../../services/actions/ingredient-details.js';

    const BurgerIngredients = () => {
        const openIngredientDetailsModal = useSelector(state => !!state.ingredientDetails.openIngredientDetailsModal)
        const ingredientDetails = useSelector(state => state.ingredientDetails.ingredientDetails)

        const dispatch = useDispatch()

        const bunRef = useRef(null);
        const mainRef = useRef(null);
        const sauceRef = useRef(null);

        const handleIngredientClick = (ingredient) => {
            dispatch(addIgredientDetails(ingredient));
          }
    
        const closeModal = () => {
            dispatch(deleteIgredientDetails());
        }

    return (
        <>
        <section className={`${burgerIngredientsStyle.ingredients} mt-5 pt-5`}>
            <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
            <Switch bunRef={bunRef} mainRef={mainRef} sauceRef={sauceRef} />
            <div className={burgerIngredientsStyle.scroll}>
                <Cards scrollToRef={bunRef} typesItem={'bun'} typesText={'Булки'} handleIngredientClick={handleIngredientClick} />
                <Cards scrollToRef={mainRef} typesItem={'main'} typesText={'Начинки'} handleIngredientClick={handleIngredientClick} />
                <Cards scrollToRef={sauceRef} typesItem={'sauce'} typesText={'Соусы'} handleIngredientClick={handleIngredientClick} />
            </div>
        </section>
        {
            openIngredientDetailsModal && 
            <Modal onClose={closeModal}>
                <IngredientDetails card={ingredientDetails} />
            </Modal>
        }
        </>
    )
}

export default BurgerIngredients;