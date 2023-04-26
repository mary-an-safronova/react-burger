import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import appStyle from  './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { OpenOrderModalContext } from '../../services/OpenOrderModalContext';
import { OpenIngredientModalContext } from '../../services/OpenIngredientModalContext';
import { ItemContext } from '../../services/ItemContext';
import { DataOrderContext } from '../../services/DataOrderContext';
import { getData } from '../../services/actions/burger-ingredients';

const App = () => {
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [openIngredientModal, setOpenIngredientModal] = useState(false);
  const [item, setItem] = useState(false);

  const [dataOrder, setDataOrder] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className={appStyle.app}>

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
      
    </div>
  );
}

export default App;