import { useState, useEffect } from "react";
import appStyle from  './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { apiConfig } from '../../utils/constants.js';
import { IngredientsContext } from '../../services/IngredientsContext';
import { OpenOrderModalContext } from '../../services/OpenOrderModalContext';
import { OpenIngredientModalContext } from '../../services/OpenIngredientModalContext';
import { ItemContext } from '../../services/ItemContext';
import { DataOrderContext } from '../../services/DataOrderContext';

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
        <OpenOrderModalContext.Provider value={{ openOrderModal, setOpenOrderModal }}>
          <OpenIngredientModalContext.Provider value={{ openIngredientModal, setOpenIngredientModal }}>
            <ItemContext.Provider value={{ item, setItem }}>
              <DataOrderContext.Provider value={{ dataOrder, setDataOrder }}>

              <AppHeader />
              <main className={appStyle.app__main}>
                <BurgerIngredients />
                <BurgerConstructor />
              </main>

              </DataOrderContext.Provider>
            </ItemContext.Provider>
          </OpenIngredientModalContext.Provider>
        </OpenOrderModalContext.Provider>
      </IngredientsContext.Provider>
      
    </div>
  );
}

export default App;