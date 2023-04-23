import { useState, useEffect } from "react";
import appStyle from  './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { apiConfig } from '../../utils/constants.js';
import { IngredientsContext } from '../../services/ingredientsContext';
import { openOrderModalContext } from '../../services/openOrderModalContext';
import { openIngredientModalContext } from '../../services/openIngredientModal';
import { itemContext } from '../../services/itemContext';
import { dataOrderContext } from '../../services/dataOrderContext';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [openIngredientModal, setOpenIngredientModal] = useState(false);
  const [item, setItem] = useState(false);

  const [dataOrder, setDataOrder] = useState({});

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

  return (
    <div className={appStyle.app}>

      <IngredientsContext.Provider value={ingredients}>
        <openOrderModalContext.Provider value={{ openOrderModal, setOpenOrderModal }}>
          <openIngredientModalContext.Provider value={{ openIngredientModal, setOpenIngredientModal }}>
            <itemContext.Provider value={{ item, setItem }}>
              <dataOrderContext.Provider value={{ dataOrder, setDataOrder }}>

              <AppHeader />
              <main className={appStyle.app__main}>
                <BurgerIngredients />
                <BurgerConstructor />
              </main>

              </dataOrderContext.Provider>
            </itemContext.Provider>
          </openIngredientModalContext.Provider>
        </openOrderModalContext.Provider>
      </IngredientsContext.Provider>
      
    </div>
  );
}

export default App;