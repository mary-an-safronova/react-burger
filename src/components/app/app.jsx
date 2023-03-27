import React from 'react';
import appStyle from  './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

class App extends React.Component {
  render() {
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
}

export default App;