import { useState, useEffect } from "react";
import appStyle from  './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { apiConfig } from '../../utils/constants.js';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { OrderDetails } from '../order-details/order-details';
import { IngredientsContext } from "../../services/ingredientsContext";

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState(false);

  const getData = () =>
    fetch(`${apiConfig.baseUrl}/ingredients`)
      .then((res) => {
        if (res.ok) {
            return res.json();
        }
          return Promise.reject(`Ошибка: ${res.status}`);
        })

  useEffect(() => {
    getData()
    .then(({ success, data }) => {
      if (success) {
        setIngredients(data)
      }
    })
    .catch((err) => { console.log(err) })
  }, [])

  const handleIngredientClick = (item) => {
    setItem(item)
    setOpenModal(!openModal);
  }

  const handleOrderButtonClick = () => {
    setItem(false);
    setOpenModal(!openModal);
  }

  const closeModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className={appStyle.app}>
      <IngredientsContext.Provider value={ingredients}>
        <AppHeader />
        <main className={appStyle.app__main}>
          <BurgerIngredients handleIngredientClick={handleIngredientClick} />
          <BurgerConstructor handleOrderButtonClick={handleOrderButtonClick} />
        </main>
        {
        openModal && <Modal onClose={closeModal}>
          { item ? <IngredientDetails card={item} /> : <OrderDetails /> }
        </Modal>
        }
      </IngredientsContext.Provider>
    </div>
  );
}

export default App;