import React from 'react';
import appStyle from  './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { data } from '../../utils/constants.js';

const App = () => {
  return (
    <div className={appStyle.app}>
      <AppHeader />
      <main className={appStyle.app__main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;