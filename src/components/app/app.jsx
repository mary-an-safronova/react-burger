import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import appStyle from  './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getData } from '../../services/actions/burger-ingredients';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className={appStyle.app}>

      <AppHeader />
      <main className={appStyle.app__main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
      
    </div>
  );
}

export default App;