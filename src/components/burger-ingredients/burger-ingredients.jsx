import { useContext } from 'react';
import Switch from '../switch/switch.jsx';
import burgerIngredientsStyle from  './burger-ingredients.module.css';
import Cards from '../cards/cards';
import { ingredientTypes } from '../../utils/constants.js';
import { OpenIngredientModalContext } from '../../services/OpenIngredientModalContext.js';
import { ItemContext } from '../../services/ItemContext.js';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details.jsx';

    const BurgerIngredients = () => {
        const {openIngredientModal, setOpenIngredientModal} = useContext(OpenIngredientModalContext);
        const {item, setItem} = useContext(ItemContext);

        const handleIngredientClick = (item) => {
            setItem(item)
            setOpenIngredientModal(!openIngredientModal);
          }
    
        const closeModal = () => {
            setOpenIngredientModal(!openIngredientModal);
        }

    return (
        <>
        <section className={`${burgerIngredientsStyle.ingredients} mt-5 pt-5`}>
            <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
            <Switch ingredients={ ingredientTypes } />
            <div className={burgerIngredientsStyle.scroll}>
                {ingredientTypes.map((item, index) => {
                    return <Cards types={ingredientTypes} typesItem={item.type} typesText={item.text} key={index} handleIngredientClick={handleIngredientClick} />
                })}
            </div>
        </section>
        {
            openIngredientModal && 
            <Modal onClose={closeModal}>
                <IngredientDetails card={item} />
            </Modal>
        }
        </>
    )
}

export default BurgerIngredients;